import React, { useState } from 'react';
import "./Styles/LoginPageStyles.css";
import "./Styles/LoginPageButtonStyles.scss";

export const LandingPage = () => {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(prevState => !prevState);
    };

    return (
        <div className={`container ${isActive ? 'active' : ''}`}>
            <div className={`form-container sign-up ${isActive ? 'active' : ''}`}>
                <form>
                    <h1> Create Account</h1>
                    <div className='underline'></div>
                    <span>Enter your Username and Password for registration</span>
                    <input type="text" placeholder='Name'></input>
                    <input type="password" placeholder='Password'></input>
                    <input type="password" placeholder='Confirm Password'></input>
                    <div className="button-container">
                        <a href='#' class="button btn-color btn-animation">Sign up</a>
                    </div>
                </form>
            </div>
            <div className={`form-container sign-in ${isActive ? '' : 'active'}`}>
                <form>
                    <h1> Sign In</h1>
                    <div className='underline'></div>
                    <span>Enter your Username and Password</span>
                    <input type="text" placeholder='Name'></input>
                    <input type="password" placeholder='Password'></input>
                    <a href="">Forgot Your Password?</a>
                    <div className="button-container">
                        <a href='#' class="button btn-color btn-animation">Sign up</a>
                    </div>
                </form>
            </div>
            <div className="toggle-container">
                <div className={`toggle ${isActive ? '' : 'active'}`}>
                    <div className={`toggle-panel toggle-left ${isActive ? 'active' : ''}`}>
                        <h1>Welcome to STI College Marikina's Expo!</h1>
                        <p>Enter your personal details to access the website</p>
                        <button className="toggle-btn" type="button" onClick={handleToggle}>Sign In</button>
                    </div>
                    <div className={`toggle-panel toggle-right ${isActive ? '' : 'active'}`}>
                        <h1>Welcome to STI College Marikina's Expo!</h1>
                        <p>Haven't registered yet? Register now to interact with the Expo experience</p>
                        <button className="toggle-btn" type="button" onClick={handleToggle}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
