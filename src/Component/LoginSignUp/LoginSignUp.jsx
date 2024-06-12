import React from 'react';
import './LoginSignUp.css';
import { useState } from 'react';
// import email_icon from '../Assets/email_ico
const LoginSignUp=()=> {
const [action,setAction] = useState("Login");
  return (

    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"? <div> </div>:  <div className="input">
          <input type="text" placeholder='Name'/>
        </div>}
       
        <div className="input">
        {/* <img src={email_icon} alt="email" /> */}
          <input type="email" placeholder='Email ID' />


        </div>
        <div className="input">
          
          <input type="password" placeholder='Password'/>
        </div>
      </div>
      {action==="Sign Up"?<div></div>: <div className="forgot-password">Lost Password ? <span>click here!</span></div>}
     
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"? "submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignUp