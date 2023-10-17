import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import "./loginForm.css"


function LoginForm() {

  const handleGoogle = async (e)=> {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth,provider)
  }

  return (
    <div>
      <Container fluid className='p-2' style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh", flexDirection: "column", marginTop:"10rem" }}>
        {/* <div className='d-block d-md-none'> */}
        <div style={{}}>
          <h4 className='text-dark rightHeader'>Sign In</h4>
          <h4 className='text-dark subText'>Sign in to your account</h4>
        </div>

        <div className='' style={{ display: "flex" }}>
          <button onClick={handleGoogle} className='btnClass'><img src="/gLogo.png" alt="" style={{ width: "25px" }} />Sign in with Google</button>
          <button onClick={() => {console.log('AM')}} className='btnClass'><img src="/apLogo.png" alt="" style={{ width: "18px", marginRight: "5px" }} />Sign in with Apple</button>
        </div>
        <div className='formHolder p-3'>
          <br />
          <h4 className='text-dark subText textHolder' style={{ fontSize: "12px", marginLeft: "-16rem" }}>Email address</h4>
          <input className='inputField' type="email" />
          <h4 className='text-dark subText textHolder' style={{ fontSize: "12px", marginLeft: "-17.5rem" }}>Password</h4>
          <input className='inputField' type="password" />
          <br />
          <br />
          <a className='textHolder' style={{ fontSize: "12px", textAlign: "start", textDecoration: "none", marginLeft: "-14rem" }} href="">Forget password ?</a>
          <br />
          <br />
          <Button style={{ width: "100%" }}>Sign In</Button>
          <br />
          <br />
        </div>
        <br />
        <br />
        <h6 className='textHolder' style={{ fontSize: "12px" }}>Dont have an account ? <a style={{ textDecoration: "none" }} href="">Register here</a></h6>
        {/* </div> */}
      </Container>
    </div>
  )
}

export default LoginForm
