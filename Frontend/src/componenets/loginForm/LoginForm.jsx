import React, { useContext, useState } from 'react';
import ReactLoading from 'react-loading';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { FirebaseContext } from '../../store/Context';
import { AuthContext } from '../../store/AuthContext';
import { toast } from "react-toastify";
import "./loginForm.css";


function LoginForm() {

  const [userID, setUserID] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);
  const { user, setUser } = useContext(AuthContext)

  const handleGoogle = async (e) => {
    setLoading(true)
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
  }

  const handleSignIn = (data) => {
    firebase.firestore().collection("users").where("email", "==", data.user.email).get()
      .then((querySnapshot) => {
        if (querySnapshot.docs.length === 0){
          firebase.firestore().collection("users").add({
            name: data.user.displayName,
            email: data.user.email,
            photoUrl: data.user.photoURL
          }).then((data) => {
            localStorage.setItem('user', data.user.email);
            navigate("/home")
          }).catch(() => {
            toast.error("There is an issue with the login");
          })
        }else{
          querySnapshot.forEach((doc) => {
            setUser(doc.data());
            setUserID(doc.id)
            localStorage.setItem("user", doc.data().email);
          });
          navigate('/home')
        }
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error handling sign in:", error);
        toast.error("Error handling sign in: ", error.message);
        setLoading(false)
      });

  };

  return (
    <div>
      <Container fluid className='p-2' style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh", flexDirection: "column", marginTop: "10rem" }}>
        {/* <div className='d-block d-md-none'> */}
        <div style={{}}>
          <h4 className='text-dark rightHeader'>Sign In</h4>
          <h4 className='text-dark subText'>Sign in to your account</h4>
        </div>

        <div className='' style={{ display: "flex" }}>
          <button onClick={(e) => {
            handleGoogle(e).then((data) => {
              handleSignIn(data)
            })
          }
          } className='btnClass'><img src="/gLogo.png" alt="" style={{ width: "25px" }} />Sign in with Google</button>
          <button onClick={null} className='btnClass'><img src="/apLogo.png" alt="" style={{ width: "18px", marginRight: "5px" }} />Sign in with Apple</button>
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
      {loading && <>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", zIndex: '11' }}>
          <div style={{ width: "100px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(180deg, #4285F4 100%, #286DE0 100%)", borderRadius: "15px", zIndex: "11" }}>
            <ReactLoading height={50} width={50} />
          </div>
        </div>
      </>}
    </div>
  )
}

export default LoginForm
