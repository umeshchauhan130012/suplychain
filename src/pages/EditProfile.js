import React from "react";
import Edit from "../Component/Edit";
import Profile from "../Component/Profile";
import { Link } from "react-router-dom";
import { ArrowLeft2 } from 'iconsax-react';


const EditProfile = () => {
    return (
        <>
            <h4><Link to="/dashboard/general-settings"><ArrowLeft2 /> Back to Settings</Link></h4>
            <div className="MainCreateWarip">
                <div className="CreateNewUserWarip">
                    <div className="SuccessADDbg">
                        <Edit />
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

export default EditProfile;