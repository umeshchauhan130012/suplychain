import React from "react";
import Profile from "../Component/Profile";
import ChangePass from "../Component/ChangePass";
import { ArrowLeft2 } from 'iconsax-react';
import { Link } from "react-router-dom";



const ChangePassword = () => {
    return (
        <>
            <h4><Link to="/dashboard/general-settings"><ArrowLeft2 /> Back to Settings</Link></h4>
            <div className="MainCreateWarip">
                <div className="CreateNewUserWarip">
                    <div className="SuccessADDbg">
                        <ChangePass />
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

export default ChangePassword;