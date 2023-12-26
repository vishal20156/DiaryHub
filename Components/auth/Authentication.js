import React from 'react'
import { useState } from 'react';
import LogoWithName from '../../Assets/logo.png';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';

const Authentication = () => {
    const [showSignUp, setShowSignUp] = useState(false);
    const [showForgotPass, setForgotPass] = useState(false);

    const handleSignInClick = () => {
        setShowSignUp(false);
        setForgotPass(false);
    };
    
    const handleSignUpClick = () => {
        setShowSignUp(true);
    };

    const handleForgotClick = () => {
        setForgotPass(true);
    }

    return (
        <div className="flex bg-gray-50">
            <div className="w-2/5 h-screen flex items-center justify-center">
                <img className="mr-2" src={LogoWithName} alt="logo" />
            </div>
            {showSignUp ? (
                <SignUp onSignInClick={handleSignInClick} />
            ) : showForgotPass ? (
                <ForgotPassword onSignInClick={handleSignInClick}/>
            ) :(
                <Login onSignUpClick={handleSignUpClick} onForgotClick={handleForgotClick}/>
            )}
        </div>
    )
}

export default Authentication
