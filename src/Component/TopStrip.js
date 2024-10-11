import React, { useState, useEffect } from "react";
import { Notification, Setting2, UserOctagon, LogoutCurve, HambergerMenu } from 'iconsax-react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout, profile } from "../redux/actions/userAuth";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';

const TopStrip = () => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state);
    const [profileData, setProfileData] = useState("");
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        document.body.classList.toggle("resmenu", isOpen);
    }, [isOpen]);

    const [isOpen2, setIsOpen2] = useState(false);
    useEffect(() => {
        document.body.classList.toggle("TopPROBox", isOpen2);
    }, [isOpen2]);

    const pathname = useLocation().pathname;

    const logoutHandle = () => {
        dispatch(logout());
    }

useEffect(() => {
    if (status.userLogout.data !== "") {
      if (status.userLogout.data.status === 200) {
        toast.success(status.userLogout.data.message, {
            position: "bottom-right",
            theme: "colored",
          });
          window.sessionStorage.clear();
          let path = `/`;
         navigate(path);
          window.location.reload();
      } else {
        if(status.userLogout.data.response != null){
            toast.error(status.userLogout.data.response.data.error, {
            position: "bottom-right",
            theme: "colored",
          });
        }else{
        toast.error(status.userLogout.data.message, {
            position: "bottom-right",
            theme: "colored",
           });
        }
      }
    }
}, [status]);

    useEffect(() => {
        const apiData = {};
        dispatch(profile(apiData));
      },[]);
      

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


        useEffect(() => {
            if (status.userProfile.data !== "") {
                if (status.userProfile.data.response != null) {
                    if (status.userProfile.data.response.status === 401) {
                        dispatch(logout()); 
                        window.sessionStorage.clear();
                        let path = `/`;
                        navigate(path);
                        window.location.reload();
                    }
                }
            }
        }, [status]);


    return (
        <>
            <div className="topstrip">
                <div className="topLogo">
                    <Link className={pathname === '/Dashboard' ? 'active' : ''} to="/Dashboard">
                        <img src="../image/logo.png" alt="logo" />
                    </Link>
                </div>

                <div className="TopRightStrip">
                    <span><Link onClick={() => { setIsOpen(!isOpen) }} className="resPosive"><HambergerMenu /></Link></span>
                    <span><Link to=""><Notification /></Link></span>
                    <div className="UserSec">
                        <Link onClick={() => { setIsOpen2(!isOpen2) }}>
                            <img src="../image/user.png"  alt="user"/>
                            <h6>{profileData.name} <br /><span>{profileData.role}</span></h6>
                        </Link>
                            <div className="profileBox">
                                <ul>
                                    <li><Link to="/dashboard/change-password"><Setting2 />Change Password</Link></li>
                                    <li><Link to="/dashboard/general-settings"><UserOctagon />Profile</Link></li>
                                    <li><a href="#" onClick={logoutHandle}><LogoutCurve />Log Out</a></li>
                                </ul>
                            </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopStrip;