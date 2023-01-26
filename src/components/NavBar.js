import React from "react";
import {useNavigate } from "react-router-dom";
import  Button  from "react-bootstrap/Button"


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