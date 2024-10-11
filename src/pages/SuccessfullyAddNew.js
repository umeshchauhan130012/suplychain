import React from "react";
import User from "../Component/User";
import { UserOctagon, TruckFast, Shop } from 'iconsax-react';
import { Link } from "react-router-dom";

const SuccessfullyAddNew = () => {
    return (
        <>
            <div className="MainCreateWarip">
                <div className="SuccessADD">
                    <div className="SuccessADDbg">
                        <h6>Create New User</h6>
                        <div className="loginText">
                            <div className="textSection SuccessSec">
                                <img src="../image/success.png" alt="success" />
                                <h2>Success</h2>
                                <p className="AllPaddBg">New User Registration Completed Successfully</p>
                                <p>An email to confirmation registration has been sent to<br />New user’s business email address</p>
                                <p>If you do not receive a confirmation email within 1 hour <br /> Please get in touch with our team:</p>
                                <div className="formSection">
                                    <span><a href="mailto:support@supplychainmonitoring.com">support@supplychainmonitoring.com</a></span>
                                </div>
                                <div className="formSection">
                                    <Link to="/dashboard/create-new"><button>Add more New Account</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="UserBoxWarip">
                    <User hadd="Total Users" num="3000" parr="No. of Users Registered" icon=<UserOctagon /> iconBIG=<UserOctagon /> />
                    <User hadd="Total Dealers" num="1500" parr="No. of Dealers" icon=<TruckFast /> iconBIG=<TruckFast /> />
                    <User hadd="Total Retailers" num="500" parr="No. of Retailers" icon=<Shop /> iconBIG=<Shop /> />
                </div>
            </div>

        </>
    )
}

export default SuccessfullyAddNew;