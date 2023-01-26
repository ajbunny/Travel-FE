import React from "react";
import {useNavigate, Link } from "react-router-dom";
import  Button  from "react-bootstrap/button"


export default function Navi() {
    const nav = useNavigate();
  return ( 
    
    <div>
    <div className="navlinks"> 
<Button variant='secondary' onClick={() => {nav('/')}}>Home</Button>

</div>
 </div>
  )
}