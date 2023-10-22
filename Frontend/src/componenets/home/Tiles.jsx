import React from 'react'
import { Badge, Col } from 'react-bootstrap'

function Tiles({image,title,amount,growth}) {
  return (
    <>
      <Col md={2} sm={4} xs={11} style={{ borderRadius: "10px", height: "100px", backgroundColor: "white", margin: ".5rem", marginTop: 0, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", padding: "5px", minWidth: "215px" }}>
        <img src={image} style={{ width: "45px" }} alt="" />
        <p style={{ fontSize: "12px", margin: 0, marginLeft: "7px" }}>{title}</p>
        <h5 style={{ marginLeft: "7px", marginBottom: "1rem", display: "flex", justifyContent: "space-between", }}>{amount} <Badge style={{ fontSize: "10px", color: "white", fontWeight: "initial", marginBottom: "1rem" }} className='bg-success'>+{growth}%</Badge></h5>
      </Col>
    </>
  )
}

export default Tiles
