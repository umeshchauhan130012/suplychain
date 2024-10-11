import React from "react";
import Profile from "../Component/Profile";
import { ArrowLeft2 } from 'iconsax-react';
import { Link } from "react-router-dom";



const PasswordSuccesspage = () => {
    return (
        <>
            <h4><Link to="/dashboard/general-settings"><ArrowLeft2 /> Back to Settings</Link></h4>
            <div className="MainCreateWarip">
                <div className="CreateNewUserWarip">
                    <div className="SuccessADDbg">
                        <div className="passwordSuccessPage">
                            <div className="textSection SuccessSec">
                                <img src="../image/success.png" alt="success" />
                                <h2>Success</h2>
                                <p className="AllPaddBg">Your Password has been Updated</p>
                                <div className="formSection">
                                    <Link to="/dashboard/general-settings"><button>Done</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="UserBoxWarip">
                    <div className="SuccessADDbg">
                        <Profile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordSuccesspage;