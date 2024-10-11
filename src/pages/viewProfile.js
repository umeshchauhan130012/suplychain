import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { ArrowLeft } from 'iconsax-react';
import { userProfile } from "../redux/actions/userAuth";

const ViewProfile = () => {

    let param = window.location.href
    param = param.split("?")[1].split("=")[1]
    console.log(param);

    // userProfile

    const dispatch = useDispatch();
    const status = useSelector((state) => state);
    const [userProfileData, setUserProfileData] = useState("");

    useEffect(() => {
        const apiParams = {param};
        dispatch(userProfile(apiParams));
    }, [param]);
      
    useEffect(() => {
        if (status.viewUserProfile.data !== "") {
            if (status.viewUserProfile.data.status === 200) {
                setUserProfileData(status.viewUserProfile.data.data);
            } else {
                if (status.viewUserProfile.data.response != null) {
                toast.error(status.viewUserProfile.data.response.data.error ? status.viewUserProfile.data.response.data.error : status.viewUserProfile.data.response.data,{
                    position: "bottom-right",
                    theme: "colored",
                  });
                }else{
                    toast.error(status.viewUserProfile.data.message,{
                        position: "bottom-right",
                        theme: "colored",
                    });
                    }
                }
            }
        }, [status]);


    return (
        <>
            <h4><Link to="/dashboard/manage-user"><ArrowLeft />Back</Link></h4>
            <div className="MainCreateWarip">
                <div className="CreateNewUserWarip w100">
                    <div className="SuccessADDbg">
                    <div className="PersonalInfo">
                        <div className="InfiDetails">
                            <div className="DetailsSection">
                                <label>Full Name</label>
                                <h3>{userProfileData.name}</h3>
                            </div>
                            <div className="DetailsSection">
                                <label>Business Email</label>
                                <h3>{userProfileData.email}</h3>
                            </div>
                            <div className="DetailsSection">
                                <label>Mobile Number</label>
                                <h3>{userProfileData.phone}</h3>
                            </div>
                            <div className="DetailsSection">
                                <label>Your Role</label>
                                <h3>{userProfileData.role}</h3>
                            </div>
                            <div className="DetailsSection">
                                <label>Address</label>
                                <h3>{userProfileData.address}</h3>
                            </div>
                            <div className="DetailsSection">
                                <label>Country</label>
                                <h3>{userProfileData.country}</h3>
                            </div>
                            <div className="DetailsSection">
                                <label>State</label>
                                <h3>{userProfileData.state}</h3>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewProfile;