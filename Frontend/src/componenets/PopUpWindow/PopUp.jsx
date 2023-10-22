import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';

function PopUp({setPopUp}) {
  const [basicColor, setBasicColour] = useState("#4285F4");
  const [socialColor, setSocialColor] = useState("grey");
  const [currentForm, setCurrentForm] = useState('basic');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [insta, setInsta] = useState('');
  const [youtube, setYoutube]= useState('');

  const backToBasic = () => {
    setBasicColour("#4285F4");
    setSocialColor("grey");
    setCurrentForm("basic")
  }

  const moveToSocial = () => {
    setSocialColor("#4285F4");
    setBasicColour("grey");
    setCurrentForm('social')
  }

  const handleNext = (name,email,phone) => {
    if(name.length <= 2){
      toast.warning("Please enter a valid name");
      return
    }
    if(email.length <= 2){
      toast.warning("Please enter a valid email");
      return
    }
    if(phone.length < 10){
      toast.warning("Please enter a valid phone");
      return
    }
    console.log(name,email,phone,insta,youtube)
    moveToSocial();
  }
  return (
    <>
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(28, 28, 28, 0.32)",
        overflow: "hidden"
      }}>
        <div style={{
          width: "350px",
          minHeight: "320px",
          padding:"1.5rem",
          border: "none",
          borderRadius: "30px",
          boxShadow: "0px 0px 0px rgba(255, 255, 255, 0.526)",
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "white",
        }}>
          <div style={{width:"97%", height:"20px", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <h6 className='m-0 p-0'>Add New Profile</h6>
            <Button onClick={() => setPopUp(false)} className='m-0 p-0' style={{ border: "none", background: "none", color: "black" }}><FaTimes /></Button>
          </div>
          <div style={{width:"95%", height:"20px", display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:"1rem"}}>
            <div style={{ width: "45%", height: "20px", display: "flex", justifyContent: "center", alignItems: "center", borderBottom:`3px solid ${basicColor}`, cursor:"pointer"}}
              onClick={backToBasic}
            >
              <h6 style={{fontSize:"12px"}}>Basic</h6>
            </div>
            <div style={{ width: "45%", height: "20px", display: "flex", justifyContent: "center", alignItems: "center", borderBottom: `3px solid ${socialColor}`, cursor: "pointer" }}
              onClick={moveToSocial}
            >
              <h6 style={{ fontSize: "12px" }}>Social</h6>
            </div>
          </div>
          <div style={{width:"95%", height:"20px", display:"flex", marginTop:"1rem", flexDirection:"column"}}>
            {currentForm === "basic" ? (
              <>
                <label style={{ fontWeight: "initial", fontSize: "10px" }}>Enter Name*</label>
                <input style={{ border: "2px solid #EBEBEB", borderRadius: "8px", padding:".2rem" }} type="text" name="" id=""
                  value={name}
                  onChange={(e)=>{
                    setName(e.target.value)
                  }}    
                />
                <label style={{ fontWeight: "initial", fontSize: "10px" }}>Enter Email*</label>
                <input style={{ border: "2px solid #EBEBEB", borderRadius: "8px", padding:".2rem" }} type="email" name="" id=""
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }} 
                />
                <label style={{ fontWeight: "initial", fontSize: "10px" }}>Enter Phone*</label>
                <input style={{ border: "2px solid #EBEBEB", borderRadius: "8px", padding:".2rem" }} type="text" name="" id="" 
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value)
                  }} 
                />
              </>
            ) : (<>
              <label style={{ fontWeight: "initial", fontSize: "10px" }}>Instagram Link <span style={{ color: "#999CA0" }}>(optional)</span></label>
              <input style={{ border: "2px solid #EBEBEB", borderRadius: "8px", padding:".2rem" }} type="text" name="" id=""
                  value={insta}
                  onChange={(e) => {
                    setInsta(e.target.value)
                  }} 
              />
              <label style={{ fontWeight: "initial", fontSize: "10px" }}>Youtube Link <span style={{ color: "#999CA0" }}>(optional)</span></label>
              <input style={{ border: "2px solid #EBEBEB", borderRadius: "8px", padding:".2rem" }} type="text" name="" id="" 
                  value={youtube}
                  onChange={(e) => {
                    setYoutube(e.target.value)
                  }} 
              />
            </>)}
            <div style={{ display: "flex", justifyContent: "end", alignItems: "center", marginTop:"1.5rem" }}>
              {currentForm === "basic" ? (
                <Button style={{ fontSize: "11px", marginLeft: "5px" }} className=''
                  onClick={() => {
                    handleNext(name,email,phone)
                  }}
                >Next</Button>
              ):(
                <>
                  <Button style={{ fontSize: "11px", border: "2px solid #EBEBEB" }} className='bg-white text-dark'
                      onClick={backToBasic}
                  >Back</Button>
                  <Button style={{ fontSize: "11px", marginLeft: "5px" }} className=''>Done</Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopUp
