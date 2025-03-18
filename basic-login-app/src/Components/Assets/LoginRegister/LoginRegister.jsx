import React, { useState } from 'react';
import './LoginRegister.css';

import personImage from '../person.png';
import emailImage from '../email.png';
import passwordImage from '../password.png';

export const LoginRegister = () => {
  
  const[action,setAction] = useState("Login");

  // Icon Assets
  const user_icon = personImage;
  const email_icon = emailImage;
  const password_icon = passwordImage;

  return (
    <div className='container'>
      {/* Heading */}
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      {/* Username */}
      <div className='inputs'>
        {action==="Login"?<div></div>:<div className='input'>
          <img src={user_icon} alt='' />
          <input type="text" placeholder='Name' />
        </div>}

        {/* Email */}
        <div className='input'>
          <img src={email_icon} alt='' />
          <input type="email" placeholder='Email'/>
        </div>
        {/* Password */}
        <div className='input'>
          <img src={password_icon} alt='' />
          <input type="password" placeholder='Password'/>
        </div>
      </div>
      {/* Forgot Password */}
      {action==="Register"?<div></div>:<div className="forgot-password"><span>Forgot Your Password?</span></div>}

      <div className="submit-container">
        {/* Buttons for Register and Login */}
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Register")}}>Register</div>
        <div className={action==="Register"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  );
};

export default LoginRegister;
