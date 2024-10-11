import React, { useState } from "react";
import LoginSlider from "../Component/LoginSlider";
import { Link } from "react-router-dom";
import OTPInput, { ResendOTP } from "otp-input-react";
  
const VerifyOTP = () => {   
    const [OTP, setOTP] = useState("");
    return (
        <div className="login">
            <div className="container-fluid">
                <div className="row" style={{
                    minHeight: "100vh"
                }}>
                    <div className="col-lg-6 col-md-6 col-sm-12 pl pr">
                        <LoginSlider />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 pl pr">
                        <div className="loginText">
                            <div className="logo">
                                <img src="./image/logo.png" alt="logo" />
                            </div>
                            <div className="textSection">
                                <h2>Verify OTP</h2>
                                <p>OTP has been sent to registered email address </p>
                                <div className="formSection">
                                    <div className="OTpVerify">
                                        <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} secure />
                                        <ResendOTP onResendClick={() => console.log("Resend clicked")} />
                                    </div>
                                    <Link to="/recover-success"><button>Verify</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}       

export default VerifyOTP;