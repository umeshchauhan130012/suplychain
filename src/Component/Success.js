import React from "react";
import { Link } from "react-router-dom";


const Success = () => {
    return (
        <>
            <div className="loginText">
                <div className="logo">
                    <img src="./image/logo.png" alt="logo" />
                </div>
                <div className="textSection SuccessSec">
                <img src="./image/success.png" alt="success" />
                    <h2>Success</h2>
                    <p className="AllPaddBg">Registration Completed Successfully</p>
                    <p>An email to confirm your registration has been sent to <br /> your email address</p>
                    <p>If you do not receive a confirmation email within 1 hour<br />Please get in touch with our team:</p>
                    <div className="formSection">
                    <span><Link to="/registration"> support@ supplychainmonitoring.com</Link></span>
                    </div>
                    <div className="formSection">
                        <button>Resend confirmation email</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Success;
