import React from 'react'
import "./login.css"
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaGithub, FaTwitterSquare, FaLinkedin, FaDiscord } from "react-icons/fa";
import LoginForm from '../../componenets/loginForm/LoginForm';


function LoginPage() {
  return (
    <>
      <div>
        <div style={{
          background: 'linear-gradient(180deg, #4285F4 0%, #286DE0 100%)',
          height: "107vh",
          width: "50%",
          clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)',
          zIndex:17
        }}>
          <Container fluid>
            <Row className="d-none d-md-block" style={{width:"80%"}}>
              <Col xs={4} md={12} >
                <h4 className='text-white p-5'>LOGO</h4>
              </Col>
              <Col xs={8} md={12} className="text-center d-flex align-items-center" style={{ height: "60vh",marginBottom:"1rem" }}>
                <h3 className='text-white brandName'>Board</h3>
              </Col>
              <div xs={12} className='footerIconsHolder' style={{marginTop:"2rem"}}>
                <Button><FaGithub size={28}/></Button>
                <Button><FaTwitterSquare size={28}/></Button>
                <Button><FaLinkedin size={28}/></Button>
                <Button><FaDiscord size={28}/></Button>
              </div>
            </Row>
          </Container>
        </div>
        <div className='rightSection'>
          <div className="d-none d-md-block" style={{width:"45%",height:"10vh"}}></div>
          <div className="d-none d-md-block" style={{width:"45%"}}>
            <LoginForm />
          </div>
          <div className="d-block d-md-none">
            <LoginForm />
            <Col xs={12} md={4} className='secondFoot'>
              <Button><FaGithub size={17} /></Button>
              <Button><FaTwitterSquare size={17} /></Button>
              <Button><FaLinkedin size={17} /></Button>
              <Button><FaDiscord size={17} /></Button>
            </Col>
          </div>
        </div>
      </div>

    </>
  )
}

export default LoginPage
