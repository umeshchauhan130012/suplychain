import React, { useState, useEffect } from "react";
import { Edit2, ArrowRight2 } from 'iconsax-react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';

const Personalinformation = () => {

    const dispatch = useDispatch();
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

      
    
    return(
        <>
           <div className="PersonalInfo">
            <h2>personal information <Link to="/dashboard/edit-profile"><Edit2 /> Edit Profile</Link></h2>
            <div className="InfiDetails">
                <div className="DetailsSection">
                    <label>Full Name</label>
                    <h3>{profileData.name}</h3>
                </div>
                <div className="DetailsSection">
                    <label>Business Email</label>
                    <h3>{profileData.email}</h3>
                </div>
                <div className="DetailsSection">
                    <label>Mobile Number</label>
                    <h3>{profileData.phone}</h3>
                </div>
                <div className="DetailsSection">
                    <label>Your Role</label>
                    <h3>{profileData.role}</h3>
                </div>
                <div className="DetailsSection">
                    <label>Address</label>
                    <h3>{profileData.address}</h3>
                </div>
                <div className="DetailsSection">
                    <label>Country</label>
                    <h3>{profileData.country}</h3>
                </div>
                <div className="DetailsSection">
                    <label>State</label>
                    <h3>{profileData.state}</h3>
                </div>
            </div>
           </div>
           <div className="ChangePassword DetailsSection">
                <label>Do you want update your password?</label>
                <h3><Link to="/dashboard/change-password">Change Password <ArrowRight2 /></Link></h3>
            </div>
        </>
    )
}

export default Personalinformation;