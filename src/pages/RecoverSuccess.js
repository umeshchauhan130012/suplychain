import React from "react";
import LoginSlider from "../Component/LoginSlider";
import { Link } from "react-router-dom";

const RecoverSuccess = () => {

    return (
        <div className="login">
            <div className="container-fluid">
                <div className="row" style={{ minHeight: "100vh" }}>
                    <div className="col-lg-6 col-md-6 col-sm-12 pl pr">
                        <LoginSlider />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 pl pr">
                        <div className="loginText">
                            <div className="logo">
                                <img src="./image/logo.png" alt="logo" />
                            </div>
                            <div className="textSection SuccessSec">
                                <img src="./image/success.png" alt="success" />
                                <h2>Success</h2>
                                <p className="AllPaddBg">Your password has been recovered successfully</p>
                                <p>New Password has been sent to your registered <br />business email address</p>
                                <p>If you do not receive a email within 1 hour <br />Please get in touch with our team:</p>
                                <div className="formSection">
                                    <span><Link to="/registration"> support@supplychainmonitoring.com</Link></span>
                                </div>
                                <div className="formSection">
                                    <Link to="/"><button>Login Now</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecoverSuccess;