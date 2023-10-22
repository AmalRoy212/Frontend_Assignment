import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaSistrix } from 'react-icons/fa';
import Badge from 'react-bootstrap/Badge';
import { Doughnut } from 'react-chartjs-2';
import { AuthContext } from "../../store/AuthContext";
import '../../pages/loginPage/login.css'
import './sidebar.css'
import { FirebaseContext } from '../../store/Context';
import Chart from '../chart/Chart';
import PopUp from '../PopUpWindow/PopUp';
import { PopUpContext } from '../../store/AppContext';

function HomeContainer() {

  const { user, setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  // const { popUP, setPopUp } = useContext(PopUpContext)

  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    firebase.firestore().collection("users").where("email", "==", localStorage.getItem('user')).get()
      .then((querySnapshot) => {
        querySnapshot.forEach(element => {
          setUser(element.data());
        });
      })
      .catch((error) => {
        toast.error("Error getting documents: ", error);
      });
  }, [user])


  //dummy data
  const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [19, 12, 20, 23],
        backgroundColor: '#98D89E',
      },
      {
        label: 'Dataset 2',
        data: [9, 21, 30, 35],
        backgroundColor: '#EE8484',
      },
    ],
  };
  const dataTwo = {
    datasets: [
      {
        label: 'Dataset 1',
        data: [ 12, 40, 23],
        backgroundColor: [
          '#98D89E', // Color for the first segment
          '#EE8484', // Color for the second segment
          '#FFFF99', // Color for the third segment
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
                {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "start", flexDirection: "column", paddingLeft:"1rem" }}>
                  <Button style={{ background: "none", border: "none", marginTop: "1rem", fontSize: "12px" }}>Help</Button>
                  <Button style={{ background: "none", border: "none", fontSize: "12px" }}>Contact us</Button>
                </div> */}
              </div>
            </Col>
            <Col md={9}>
              <div style={{width:"100%", height:"95vh", marginTop:"1rem"}}>
                <div style={{width:"97%", height:"50px", paddingTop:"1rem",justifyContent:"space-between", display:"flex"}}>
                  <h4 style={{fontSize:"18px"}} className='text-dark'>Dashboard</h4>
                  <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"50%"}}>
                    <div style={{ border: "none", borderRadius: "10px", backgroundColor:"white", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"5px" }}>
                     <input style={{border:"none"}} type="text" placeholder='Search...' />
                     <FaSistrix/>
                    </div>
                    <Button style={{ border: "none", background: "none" }}><img style={{width:"25px"}} src='/buttonImgs/img6.png' /></Button>
                    {user && <img style={{width:"30px", height:"30px", objectFit:"cover", borderRadius:"50%"}} src={user?.photoUrl} alt="" />}
                  </div>
                </div>
                <div style={{width:"100%", padding:"1rem"}}>
                  <Row style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <Col md={2} sm={4} xs={11} style={{ borderRadius: "10px", height: "100px", backgroundColor: "white", margin: ".5rem", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", padding:"5px", minWidth:"200px" }}>
                      <img src="/buttonImgs/img7.png" style={{width:"45px"}} alt="" />
                      <p style={{fontSize:"12px", margin: 0, marginLeft:"7px"}}>Total Revenues</p>
                      <h5 style={{ marginLeft: "7px", marginBottom:"1rem" }}>$2,129,430 <Badge style={{ fontSize: "10px", color: "white", fontWeight: "100px", marginBottom: "1rem" }} className='bg-success'>+2.5%</Badge></h5>

                    </Col>
                    <Col md={2} sm={4} xs={11} style={{ borderRadius: "10px", height: "100px", backgroundColor: "white", margin: "1rem", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", padding: "5px", minWidth:"200px" }}>
                      <img src="/buttonImgs/img8.png" style={{width:"45px"}} alt="" />
                      <p style={{ fontSize: "12px", margin: 0, marginLeft:"7px" }}>Total Transactions</p>
                      <h5 style={{ marginLeft: "7px" }}>1520 <Badge style={{ fontSize: "10px", color: "white", fontWeight: "100px", marginBottom: "1rem" }} className='bg-success'>+1.7%</Badge></h5>
                    </Col>
                    <Col md={2} sm={4} xs={11} style={{ borderRadius: "10px", height: "100px", backgroundColor: "white", margin: "1rem", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", padding: "5px", minWidth:"200px" }}>
                      <img src="/buttonImgs/img9.png" style={{width:"45px"}} alt="" />
                      <p style={{ fontSize: "12px", margin: 0, marginLeft:"7px" }}>Total Revenues</p>
                      <h5 style={{ marginLeft: "7px" }}>9721 <Badge style={{ fontSize: "10px", color: "white", fontWeight: "100px", marginBottom: "1rem" }} className='bg-success'>+1.4%</Badge></h5>
                    </Col>
                    <Col md={2} sm={4} xs={11} style={{ borderRadius: "10px", height: "100px", backgroundColor: "white", margin: "1rem", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", padding: "5px", minWidth:"200px" }}>
                      <img src="/buttonImgs/img10.png" style={{width:"40px"}} alt="" />
                      <p style={{ fontSize: "12px", margin: 0, marginLeft:"7px" }}>Total Revenues</p>
                      <h5 style={{ marginLeft: "7px" }}>9721 <Badge style={{ fontSize: "10px", color: "white", fontWeight: "100px", marginBottom: "1rem" }} className='bg-success'>+4.2%</Badge></h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div style={{ width: "100%", height: "40vh", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", borderRadius:"10px"}}>
                        <div style={{padding:"1rem",width:"100%"}}>
                          <h6 style={{marginLeft:".5rem"}}>Activities</h6>
                          <p style={{ padding: 0, margin: ".5rem", fontSize: "12px", color: "#858585" }}>October - November 2023</p>
                        </div>
                        <div style={{ width: "100%", height: "25vh", display:"flex", justifyContent:"center"}}>
                          <Chart chartData={data} />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className='d-none d-md-block'>
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
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
                      <Col md={6} style={{ minHeight: "215px", backgroundColor: "white", width: "47%", margin: ".5rem", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", padding: "5px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <Button style={{ background: "none", border: "none" }}><img style={{ width: "120px", height: "120px" }} src="/buttonImgs/img11.png" alt="" onClick={() => setPopUp(true)} /></Button>
                        <br />
                        <p>Add Profile</p>
                      </Col>
                    </div>
                  </Row>
                  <Row className='d-block d-md-none'>
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                      <Col md={6} sm={9} xs={9} style={{ minHeight: "215px", backgroundColor: "white", width: "100%", margin: ".5rem", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", padding: "5px", display: "flex" }}>
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
                      <Col md={6} style={{ minHeight: "215px", backgroundColor: "white", width: "100%", margin: ".5rem", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", padding: "5px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
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
          {popUp && <PopUp setPopUp={setPopUp} />}
        </Container>
      </div>
    </>
  )
}

export default HomeContainer
