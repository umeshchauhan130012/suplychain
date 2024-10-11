import React, { useEffect, useState } from "react";
import { Edit2 } from 'iconsax-react';
import {  useSelector } from "react-redux";
import { toast } from 'react-toastify';

const Profile = () => {
    const status = useSelector((state) => state);
    const [profileData, setProfileData] = useState("");

    useEffect(() => {
        if (status.userProfile.data !== "") {
            if (status.userProfile.data.status === 200) {
                setProfileData(status.userProfile.data.data);
            } else {
                if (status.userProfile.data.response != null) {
                toast.error(status.userProfile.data.response.data.error ? status.userProfile.data.response.data.error : status.userProfile.data.response.data,{
                    position: "bottom-right",
                    theme: "colored",
                  });
                }else{
                    toast.error(status.userProfile.data.message,{
                        position: "bottom-right",
                        theme: "colored",
                    });
                    }
                }
            }
        }, [status]);


    return (
        <div className="PersonalInfo">
            <h2>Your Profile</h2>
            <div className="Profile">
                <div className="ProfileImage">
                    <img src="../image/user.png" alt="user" />
                    <div className="formInput">
                        <Edit2 />
                    </div>
                    <div className="file-input">
                        <input type="file" name="file-input" id="file-input" className="file-input__input" />
                        <label className="file-input__label" htmlFor="file-input">
                        <span><Edit2 /></span></label>
                    </div>
                </div>
                <h4>{profileData.name}</h4>
                <p>{profileData.role}</p>
            </div>
        </div>
    )
}

export default Profile;