import React, { useContext, useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import Badge from 'react-bootstrap/Badge';
import Chart from '../chart/Chart';
import PopUp from '../PopUpWindow/PopUp';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaSistrix } from 'react-icons/fa';
import { Doughnut } from 'react-chartjs-2';
import { AuthContext } from "../../store/AuthContext";
import { FirebaseContext } from '../../store/Context';
import { toast } from 'react-toastify';
import '../../pages/loginPage/login.css'
import './sidebar.css'
import { useNavigate } from 'react-router-dom';
import Tiles from './Tiles';

function HomeContainer() {

  const { user, setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  const [profiles, setProfiles] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [drop, setDrop] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true)
    firebase.firestore().collection("users").where("email", "==", localStorage.getItem('user')).get()
      .then((querySnapshot) => {
        querySnapshot.forEach(element => {
          setUser(element.data());
          setLoading(false)
        });
      })
      .catch((error) => {
        toast.error("Error getting documents: ", error);
        setLoading(false)
      });
  }, [])

  useEffect(() => {
    firebase.firestore().collection('profiles').get()
      .then((querySnapshot) => {
        const profilesData = querySnapshot.docs.map(doc => doc.data());
        setProfiles(profilesData);
      })
      .catch((error) => {
        toast.error("Error getting documents: ", error);
      });

  },[popUp])

  //dummy data
  const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];
  const data = {
    labels,
    datasets: [
      {
        label: 'Guest',
        data: [19, 12, 20, 23],
        backgroundColor: '#98D89E',
        barPercentage: 0.9, 
        categoryPercentage: 0.3, 
        barThickness: 'flex', 
        borderRadius: 10,
      },
      {
        label: 'Users',
        data: [9, 21, 30, 35],
        backgroundColor: '#EE8484',
        barPercentage: 0.9, 
        categoryPercentage: 0.3,
        barThickness: 'flex', 
        borderRadius: 10,
      },
    ],
  };

  const dataTwo = {
    datasets: [
      {
        label: 'Dataset 1',
        data: [ 12, 40, 23],
        backgroundColor: [
          '#98D89E',
          '#EE8484',
          '#FFFF99',
        ],
      },
    ],
  };
  return (
    <>
      <div>
        <Container fluid>
          <Row>
            <Col md={3} className='d-none d-md-block'>
              <div className='holder'>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"80%", height:"15%"}}>
                  <h3 className='text-white brandName' style={{ fontSize: "30px" }}>Board.</h3>
                </div>
                <div style={{ marginTop: "2rem", height:"80%" }}>
                  <Button className='d-flex navButtons' style={{ background: "none", border: "none", justifyContent: "center", alignItems: "center", marginTop: "1rem", fontSize:"15px"  }}><img src='/buttonImgs/img1.png' style={{ marginRight: ".1rem", width:"30px" }} />Dashboard</Button>
                  <Button className='d-flex navButtons' style={{ background: "none", border: "none", justifyContent: "center", alignItems: "center", marginTop: "1rem", fontSize: "15px" }}><img src='/buttonImgs/img2.png' style={{ marginRight: ".1rem", width:"30px" }} />Transactions</Button>
                  <Button className='d-flex navButtons' style={{ background: "none", border: "none", justifyContent: "center", alignItems: "center", marginTop: "1rem", fontSize: "15px" }}><img src='/buttonImgs/img3.png' style={{ marginRight: ".1rem", width:"30px" }} />Schedules</Button>
                  <Button className='d-flex navButtons' style={{ background: "none", border: "none", justifyContent: "center", alignItems: "center", marginTop: "1rem", fontSize: "15px" }}><img src='/buttonImgs/img4.png' style={{ marginRight: ".1rem", width:"30px" }} />Users</Button>
                  <Button className='d-flex navButtons' style={{ background: "none", border: "none", justifyContent: "center", alignItems: "center", marginTop: "1rem", fontSize: "15px" }}><img src='/buttonImgs/img5.png' style={{ marginRight: ".1rem", width:"30px" }} />Settings</Button>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "start", flexDirection: "column", paddingLeft:"1rem" }}>
                  <Button style={{ background: "none", border: "none", marginTop: "1rem", fontSize: "12px" }}>Help</Button>
                  <Button style={{ background: "none", border: "none", fontSize: "12px" }}>Contact us</Button>
                </div>
              </div>
            </Col>
            <Col className='d-block d-md-none p-0'>
              <div style={{ width: "100%", height: "60px", display: "flex", justifyContent: "space-between", background:"linear-gradient(180deg, #4285F4 100%, #286DE0 100%)"}}>
                  <h3 className='text-white' style={{ fontSize: "30px", display:"flex", alignItems:"center", justifyContent:"center", marginLeft:"5px" }}>Board.</h3>
                <div style={{display:"flex", justifyContent:"center",alignItems:"center"}} >
                  <Button className='d-flex' style={{ background: "none", border: "none", }}><img src='/buttonImgs/img1.png' style={{ marginRight: ".1rem", width: "30px" }} /></Button>
                  <Button className='d-flex' style={{ background: "none", border: "none", }}><img src='/buttonImgs/img2.png' style={{ marginRight: ".1rem", width: "30px" }} /></Button>
                  <Button className='d-flex' style={{ background: "none", border: "none", }}><img src='/buttonImgs/img3.png' style={{ marginRight: ".1rem", width: "30px" }} /></Button>
                  <Button className='d-flex' style={{ background: "none", border: "none", }}><img src='/buttonImgs/img4.png' style={{ marginRight: ".1rem", width: "30px" }} /></Button>
                  <Button className='d-flex' style={{ background: "none", border: "none", }}><img src='/buttonImgs/img5.png' style={{ marginRight: ".1rem", width: "30px" }} /></Button>
                </div>
              </div>
            </Col>
            <Col md={9}>
              <div style={{width:"100%", height:"95vh", marginTop:"1rem"}}>
                <div style={{ width: "97%", height: "50px", paddingTop: "1rem",justifyContent:"space-between", display:"flex"}}>
                  <h4 style={{fontSize:"18px"}} className='text-dark'>Dashboard</h4>
                  <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"50%"}}>
                    <div style={{ border: "none", borderRadius: "10px", backgroundColor:"white", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"5px" }}>
                     <input style={{border:"none"}} type="text" placeholder='Search...' />
                     <FaSistrix/>
                    </div>
                    <Button style={{ border: "none", background: "none" }}><img style={{width:"25px"}} src='/buttonImgs/img6.png' /></Button>
                    {user && <Button className='p-0 m-0' style={{background:"none", border:"none"}} onClick={()=>setDrop(true)}>
                      <img style={{ width: "30px", height: "30px", objectFit: "cover", borderRadius: "50%" }} src={user?.photoUrl} alt="" />
                      {drop && <>
                        <div
                          onMouseLeave={() => setDrop(false)}
                          style={{ position: "absolute", right: "1rem", top: "4rem", width: "100px", height: "100px", borderRadius: "15px", background: "linear-gradient(180deg, #4285F4 100%, #286DE0 100%)" }}>
                            <p style={{fontSize:"12px", margin:"5px"}}>{user?.name}</p>
                          <Button style={{ marginTop: "10px", fontSize:"13px" }}
                            onClick={() => {
                              localStorage.removeItem('user');
                              navigate('/')
                            }}
                          >Log Out</Button>
                        </div>
                      </>}
                    </Button> }
                  </div>
                </div>
                <div style={{width:"100%", padding:"1rem"}}>
                  <Row style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <Tiles image={"/buttonImgs/img7.png"} title={"Total Revenues"} amount={"$2, 129, 430"} growth={2.5}/>
                    <Tiles image={"/buttonImgs/img8.png"} title={"Total Transactions"} amount={1520} growth={1.7}/>
                    <Tiles image={"/buttonImgs/img9.png"} title={"Total Likes"} amount={9721} growth={1.4}/>
                    <Tiles image={"/buttonImgs/img10.png"} title={"Total Users"} amount={9721} growth={4.2}/>
                  </Row>
                  <Row>
                    <Col>
                      <div style={{ width: "100%", height: "40vh", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", borderRadius:"10px", backgroundColor:"white"}}>
                        <div style={{padding:"1rem",width:"100%"}}>
                          <h6 style={{marginLeft:".5rem"}}>Activities</h6>
                          <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
                            <p style={{ padding: 0, margin: ".5rem", fontSize: "12px", color: "#858585" }}>October - November 2023</p>
                            <span style={{display:"flex"}}>
                              <p style={{ padding: 0, margin: ".5rem", fontSize: "12px", color: "#858585" }}>October - November 2023</p>
                              <p style={{ padding: 0, margin: ".5rem", fontSize: "12px", color: "#858585" }}>October - November 2023</p>

                            </span>
                          </div>
                        </div>
                        <div style={{ width: "100%", height: "25vh", display:"flex", justifyContent:"center"}}>
                          <div className="chart-container" style={{ width: "100%", paddingLeft:"1rem", paddingRight:"1rem" }}>
                            <Chart chartData={data} />
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className='d-none d-md-block'>
                    <div style={{ display: "flex", justifyContent: "space-between", padding:"5px" }}>
                      <Col md={6} sm={9} xs={9} style={{ minHeight: "215px", backgroundColor: "white", width: "47%", margin: ".5rem", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", padding: "5px", display: "flex" }}>
                        <div style={{ height: "70%", width: "50%" }}>
                          <h6 style={{ padding: 0, margin: ".5rem" }}>Top Products</h6>
                          <Doughnut data={dataTwo} />
                        </div>
                        <div style={{ height: "70%", width: "50%" }}>
                          <p style={{ padding: 0, margin: ".5rem", fontSize: "12px", color: "#858585" }}>October - November 2023</p>
                          {/* <br /> */}
                          <h6 style={{ display: "flex" }}><Badge className='text-success bg-success' style={{ borderRadius: "50%", marginRight: ".5rem" }}>.</Badge>Basic Tees</h6>
                          <p style={{ padding: 0, fontSize: "12px", color: "#858585", paddingLeft: "1.8rem" }}>55%</p>
                          <h6 style={{ display: "flex" }}><Badge className='text-warning bg-warning' style={{ borderRadius: "50%", marginRight: ".5rem" }}>.</Badge>Custom Short</h6>
                          <p style={{ padding: 0, fontSize: "12px", color: "#858585", paddingLeft: "1.8rem" }}>31%</p>
                          <h6 style={{ display: "flex" }}><Badge className='text-danger bg-danger' style={{ borderRadius: "50%", marginRight: ".5rem" }}>.</Badge>Super Hoodies</h6>
                          <p style={{ padding: 0, fontSize: "12px", color: "#858585", paddingLeft: "1.8rem" }}>14%</p>
                        </div>
                      </Col>
                      {profiles && (
                        <>
                          {profiles.map((element, index) => (
                            <Col
                              key={index}
                              md={6}
                              style={{
                                minHeight: "215px",
                                backgroundColor: "white",
                                width: "50%",
                                margin: ".5rem",
                                borderRadius: "10px",
                                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                                padding: "1.5rem"
                              }}
                            >
                              <p>{element?.name}</p>
                              <div
                                style={{
                                  width: "100%",
                                  display: "flex",
                                  padding: ".5rem",
                                  justifyContent: "space-between"
                                }}
                              >
                                <p style={{ fontSize: "15px", fontWeight: "initial" }}>
                                  <img src="/buttonImgs/img12.png" style={{ width: "30px" }} />
                                  <u>{element?.phone}</u>
                                </p>
                                <p style={{ fontSize: "15px", fontWeight: "initial" }}>
                                  <img src="/buttonImgs/img13.png" style={{ width: "30px" }} />
                                  <u>{element?.email}</u>
                                </p>
                              </div>
                              <div
                                style={{
                                  width: "100%",
                                  display: "flex",
                                  padding: ".5rem",
                                  justifyContent: "space-between"
                                }}
                              >
                                <p style={{ fontSize: "15px", fontWeight: "initial" }}>
                                  <img src="/buttonImgs/img14.png" style={{ width: "30px" }} />
                                  <u>{element?.insta}</u>
                                </p>
                                <p style={{ fontSize: "15px", fontWeight: "initial" }}>
                                  <img src="/buttonImgs/img15.png" style={{ width: "30px" }} />
                                  <u>{element?.youtube}</u>
                                </p>
                              </div>
                            </Col>
                          ))}
                        </>
                      )}
                      <Col md={6} style={{ minHeight: "215px", backgroundColor: "white", width: "50%", margin: ".5rem", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", padding: "5px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <Button style={{ background: "none", border: "none" }}><img style={{ width: "120px", height: "120px" }} src="/buttonImgs/img11.png" alt="" onClick={() => setPopUp(true)} /></Button>
                        <br />
                        <p>Add Profile</p>
                      </Col>
                    </div>
                  </Row>
                  <Row className='d-block d-md-none'>
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                      <Col md={6} sm={9} xs={9} style={{ minHeight: "215px", backgroundColor: "white", width: "100%", marginTop: ".5rem", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", padding: "5px", display: "flex" }}>
                        <div style={{ height: "70%", width: "50%" }}>
                          <h6 style={{ padding: 0, margin: ".5rem" }}>Top Products</h6>
                          <Doughnut data={dataTwo} />
                        </div>
                        <div style={{ height: "70%", width: "50%" }}>
                          <p style={{ padding: 0, margin: ".5rem", fontSize: "12px", color: "#858585" }}>October - November 2023</p>
                          <h6 style={{ display: "flex" }}><Badge className='text-success bg-success' style={{ borderRadius: "50%", marginRight: ".5rem" }}>.</Badge>Basic Tees</h6>
                          <p style={{ padding: 0, fontSize: "12px", color: "#858585", paddingLeft: "1.8rem" }}>55%</p>
                          <h6 style={{ display: "flex" }}><Badge className='text-warning bg-warning' style={{ borderRadius: "50%", marginRight: ".5rem" }}>.</Badge>Custom Short</h6>
                          <p style={{ padding: 0, fontSize: "12px", color: "#858585", paddingLeft: "1.8rem" }}>31%</p>
                          <h6 style={{ display: "flex" }}><Badge className='text-danger bg-danger' style={{ borderRadius: "50%", marginRight: ".5rem" }}>.</Badge>Super Hoodies</h6>
                          <p style={{ padding: 0, fontSize: "12px", color: "#858585", paddingLeft: "1.8rem" }}>14%</p>
                        </div>
                      </Col>
                      {profiles && (
                        <>
                          {profiles.map((element, index) => (
                            <Col md={6} style={{ minHeight: "215px", backgroundColor: "white", width: "100%", marginTop: ".5rem", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", padding: "5px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                              <p>{element?.name}</p>
                              <div
                                style={{
                                  width: "100%",
                                  display: "flex",
                                  padding: ".5rem",
                                  justifyContent: "space-between"
                                }}
                              >
                                <p style={{ fontSize: "15px", fontWeight: "initial" }}>
                                  <img src="/buttonImgs/img12.png" style={{ width: "30px" }} />
                                  <u>{element?.phone}</u>
                                </p>
                                <p style={{ fontSize: "15px", fontWeight: "initial" }}>
                                  <img src="/buttonImgs/img13.png" style={{ width: "30px" }} />
                                  <u>{element?.email}</u>
                                </p>
                              </div>
                              <div
                                style={{
                                  width: "100%",
                                  display: "flex",
                                  padding: ".5rem",
                                  justifyContent: "space-between"
                                }}
                              >
                                <p style={{ fontSize: "15px", fontWeight: "initial" }}>
                                  <img src="/buttonImgs/img14.png" style={{ width: "30px" }} />
                                  <u>{element?.insta}</u>
                                </p>
                                <p style={{ fontSize: "15px", fontWeight: "initial" }}>
                                  <img src="/buttonImgs/img15.png" style={{ width: "30px" }} />
                                  <u>{element?.youtube}</u>
                                </p>
                              </div>
                            </Col>
                          ))}
                        </>
                      )}
                      <Col md={6} style={{ minHeight: "215px", backgroundColor: "white", width: "100%", marginTop: ".5rem", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", padding: "5px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <Button style={{ background: "none", border: "none" }}><img style={{ width: "120px", height: "120px" }} src="/buttonImgs/img11.png" alt="" onClick={() => setPopUp(true)} /></Button>
                        <br />
                        <p>Add Profile</p>
                      </Col>
                    </div>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
          {popUp && <PopUp setPopUp={setPopUp} setLoading={setLoading} />}
          {loading && <>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", position:"fixed", top:0, left:0, width:"100%", height:"100vh", zIndex:'11'}}>
              <div style={{ width: "100px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", background:"linear-gradient(180deg, #4285F4 100%, #286DE0 100%)", borderRadius:"15px", zIndex:"11"}}>
                <ReactLoading height={50} width={50} />
              </div>
            </div>
          </>}
        </Container>
      </div>
    </>
  )
}

export default HomeContainer
