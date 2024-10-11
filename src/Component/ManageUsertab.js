import React, { useEffect, useState } from "react";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { TruckFast, Shop, Edit2, MoreSquare, UserOctagon, Trash, UserRemove } from 'iconsax-react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allUsers, deactivateUser, deleteUser } from "../redux/actions/userAuth";
import { toast } from 'react-toastify';
import Moment from 'react-moment';

const ManageUsertab = () => {

    const dispatch = useDispatch();
    const status = useSelector((state) => state);
    
    const [activeData, setActiveData] = useState("");
    const [allUserDetails, setAllUserDetails] = useState("");
    const [popupConfirm, setPopupConfirm] = useState(null);
    const [popupDactivateConfirm, setDactivatePopupConfirm] = useState(null);
    const [active, setSelected] = useState(null);

    const deleteHandlar = (id) => {
        dispatch(deleteUser({confirm : id}));
    }

    const dactiveHandlar = (id) => {
        dispatch(deactivateUser({confirm : id}));
    }

    useEffect(() => {
        const userParams = {activeData};
        dispatch(allUsers(userParams));
    }, [activeData]);

    const toggle = (ind) => {
        if (active === ind) {
            return setSelected(null);
        }
        setSelected(ind);
    };

    const popupActive = (ind) => {
        if (popupConfirm === ind) {
            return setPopupConfirm(null);
        }
        setPopupConfirm(ind);
    };

    const popupDactive = (ind) => {
        if (popupDactivateConfirm === ind) {
            return setDactivatePopupConfirm(null);
        }
        setDactivatePopupConfirm(ind);
    };

    useEffect(() => {
        if (status.allUsers.data !== "") {
            if (status.allUsers.data.status === 200) {
                setAllUserDetails(status.allUsers.data.data);
            }
        } else {
            if (status.allUsers.data.response != null) {
            toast.error(status.allUsers.data.response.data.error ? status.allUsers.data.response.data.error : status.allUsers.data.response.data,{
                position: "bottom-right",
                theme: "colored",
              });
            }else{
                toast.error(status.allUsers.data.message,{
                    position: "bottom-right",
                    theme: "colored",
                });
                }
            }
      }, [status.allUsers]);

      useEffect(() => {
        if (status.deleteUser.data !== "") {
            if (status.deleteUser.data.status === 200) { 
                setSelected(null);
                setPopupConfirm(null);
                setTimeout(() => {
                    window.location.reload();
                  }, 3000);
            }
        } else {
            if (status.deleteUser.data.response != null) {
            
            toast.error(status.deleteUser.data.response.data.error ? status.deleteUser.data.response.data.error : status.deleteUser.data.response.data,{
                position: "bottom-right",
                theme: "colored",
              });
            }else{
                toast.error(status.deleteUser.data.message,{
                    position: "bottom-right",
                    theme: "colored",
                });
                }
            }
      }, [status.deleteUser]);

      useEffect(() => {
        if (status.deactivateUser.data !== "") {
            if (status.deactivateUser.data.status === 200) { 
                setSelected(null);
                setDactivatePopupConfirm(null);
                setTimeout(() => {
                    window.location.reload();
                  }, 3000);
            }
        } else {
            if (status.deactivateUser.data.response != null) {
            
            toast.error(status.deactivateUser.data.response.data.error ? status.deactivateUser.data.response.data.error : status.deactivateUser.data.response.data,{
                position: "bottom-right",
                theme: "colored",
              });
            }else{
                toast.error(status.deactivateUser.data.message,{
                    position: "bottom-right",
                    theme: "colored",
                });
                }
            }
      }, [status.deactivateUser]);

    return (
        <>
            <div className="MyOrderTab">

            <div className="react-tabs" data-rttabs="true">
                <ul className="react-tabs__tab-list">
                    <li className={` react-tabs__tab ${activeData === '' ? 'react-tabs__tab--selected': '' }`} onClick={()=> setActiveData('')}>All users</li>
                    <li className={` react-tabs__tab ${activeData === 'dealer' ? 'react-tabs__tab--selected': '' }`}  onClick={()=> setActiveData('dealer')}>Dealer</li>
                    <li className={` react-tabs__tab ${activeData === 'retailer' ? 'react-tabs__tab--selected': '' }`} onClick={()=> setActiveData('retailer')}>retailer</li>
                    <li className={` react-tabs__tab ${activeData === 'admin' ? 'react-tabs__tab--selected': '' }`} onClick={()=> setActiveData('admin')}>admin</li>
                </ul>
                <div className="react-tabs__tab-panel react-tabs__tab-panel--selected">
                    {allUserDetails && allUserDetails.length === 0 ? <h3 style={{padding: "30px 0px", textAlign: "center"}}>Data Not Found</h3> : ""}
                    {allUserDetails && allUserDetails.map((item, ind) =>
                        <div className={active === 1 ? 'cementIn itemActive' : 'cementIn'} key={ind}>
                            <span>
                                <div className="cementextLeftWrap">
                                    <label className="green"><TruckFast /></label>
                                    <div className="cementextLeft">
                                        <h3>{item.name}</h3>
                                        <p>{item.role} <span className="bullets"></span> {item.email} <span className="bullets"></span> <Moment fromNow>{item.createdAt}</Moment></p>
                                    </div>
                                </div>
                                <div className="cementextRight">
                                    <label><Link to={`/dashboard/user-edit-profile?id=${item.userId}`}><Edit2 /><br /><span>edit</span></Link></label>
                                    <label><button onClick={() => toggle(ind)} ><MoreSquare /><br /><span>More</span></button>

                                        <div className={active === ind ? 'moreSection active' : 'moreSection'}>
                                            <ul>
                                                <li><Link to={`/dashboard/view-profile?id=${item.userId}`}><UserOctagon />View Profile</Link></li>
                                                <li><Link to="#" onClick={() => popupDactive(ind)}><UserRemove />Deactivate</Link></li>
                                                <li><Link to="#" onClick={() => popupActive(ind)} ><Trash />Delete</Link></li>
                                                
                                            </ul>
                                        </div>
                                    </label>
                                </div>
                            </span>
                            <div className={popupConfirm === ind ? 'deletepopup activep' : 'deletepopup'}>
                                <div className="deletepopupin">
                                    <span className="deletclose"></span>
                                    <h5>Are You sure you want to delete this account.</h5>
                                    <div className="actionbtn">
                                        <span className="closebtnpop" onClick={() => {setSelected(null); setPopupConfirm(null)}}>Close</span>
                                        <span className="confirmbtnpop" onClick={() => deleteHandlar(item.userId)}>Confirm</span>
                                    </div>
                                </div>
                            </div>
                            <div className={popupDactivateConfirm === ind ? 'deletepopup activep' : 'deletepopup'}>
                                <div className="deletepopupin">
                                    <span className="deletclose"></span>
                                    <h5>Are You sure you want to deactivate this account.</h5>
                                    <div className="actionbtn">
                                        <span className="closebtnpop" onClick={() => {setSelected(null); setDactivatePopupConfirm(null)}}>Close</span>
                                        <span className="confirmbtnpop" onClick={() => dactiveHandlar(item.userId)}>Confirm</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

                {/* <Tabs>
                    <TabList>
                        <Tab onClick={()=> setActiveData('')}>All users</Tab>
                        <Tab onClick={()=> setActiveData('dealer')}>Dealer</Tab>
                        <Tab onClick={()=> setActiveData('retailer')}>retailer</Tab>
                        <Tab onClick={()=> setActiveData('admin')}>admin</Tab>
                    </TabList>

                    <TabPanel>
                       
                      

                    </TabPanel>
                    <TabPanel>
                        <div className={active === 5 ? 'cementIn itemActive' : 'cementIn'}>
                        <span>
                                <div className="cementextLeftWrap">
                                    <label className="green"><TruckFast /></label>
                                    <div className="cementextLeft">

                                        <h3>Raj Kumar</h3>
                                        <p>Dealer <span className="bullets"></span> rajkr@gmail.com <span className="bullets"></span> 1 hour ago</p>
                                    </div>
                                </div>
                                <div className="cementextRight">
                                    <label><button ><Edit2 /><br /><span>edit</span></button></label>
                                    <label><button onClick={() => toggle(4)}><MoreSquare /><br /><span>More</span></button>
                                        <div className={active === 4 ? 'moreSection active' : 'moreSection'}>
                                            <ul>
                                                <li><Link to=""><UserOctagon />View Profile</Link></li>
                                                <li><Link to=""><UserRemove />Deactivate</Link></li>
                                                <li><Link to=""><Trash />Delete</Link></li>
                                            </ul>
                                        </div>
                                    </label>
                                </div>
                            </span>
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className={active === 6 ? 'cementIn itemActive' : 'cementIn'}>
                            <span>
                                <div className="cementextLeftWrap">
                                    <label className="yellow"><Shop /></label>
                                    <div className="cementextLeft">

                                        <h3>Raj Kumar</h3>
                                        <p>Retailer <span className="bullets"></span> rajkr@gmail.com <span className="bullets"></span> 1 hour ago</p>
                                    </div>
                                </div>
                                <div className="cementextRight">
                                    <label><button ><Edit2 /><br /><span>edit</span></button></label>
                                    <label><button onClick={() => toggle(2)}><MoreSquare /><br /><span>More</span></button>
                                        <div className={active === 6 ? 'moreSection active' : 'moreSection'}>
                                            <ul>
                                                <li><Link to=""><UserOctagon />View Profile</Link></li>
                                                <li><Link to=""><UserRemove />Deactivate</Link></li>
                                                <li><Link to=""><Trash />Delete</Link></li>
                                            </ul>
                                        </div>
                                    </label>
                                </div>
                            </span>
                        </div>
                        <div className={active === 7 ? 'cementIn itemActive' : 'cementIn'}>
                            <span>
                                <div className="cementextLeftWrap">
                                    <label className="yellow"><Shop /></label>
                                    <div className="cementextLeft">

                                        <h3>Sam Kumar</h3>
                                        <p>Retailer <span className="bullets"></span> samkr@gmail.com <span className="bullets"></span> 1 hour ago</p>
                                    </div>
                                </div>
                                <div className="cementextRight">
                                    <label><button ><Edit2 /><br /><span>edit</span></button></label>
                                    <label><button onClick={() => toggle(3)}><MoreSquare /><br /><span>More</span></button>
                                        <div className={active === 7 ? 'moreSection active' : 'moreSection'}>
                                            <ul>
                                                <li><Link to=""><UserOctagon />View Profile</Link></li>
                                                <li><Link to=""><UserRemove />Deactivate</Link></li>
                                                <li><Link to=""><Trash />Delete</Link></li>
                                            </ul>
                                        </div>
                                    </label>
                                </div>
                            </span>
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className={active === 8 ? 'cementIn itemActive' : 'cementIn'}>
                            <span>
                                <div className="cementextLeftWrap">
                                    <label className="green"><TruckFast /></label>
                                    <div className="cementextLeft">
                                        <h3>Prism Cement</h3>
                                        <p>Super Admin <span className="bullets"></span> admin@prismcement.com <span className="bullets"></span> 1 hour ago</p>
                                    </div>
                                </div>
                                <div className="cementextRight">
                                    <label><button ><Edit2 /><br /><span>edit</span></button></label>
                                    <label><button onClick={() => toggle(1)} ><MoreSquare /><br /><span>More</span></button>

                                        <div className={active === 8 ? 'moreSection active' : 'moreSection'}>
                                            <ul>
                                                <li><Link to=""><UserOctagon />View Profile</Link></li>
                                                <li><Link to=""><UserRemove />Deactivate</Link></li>
                                                <li><Link to=""><Trash />Delete</Link></li>
                                            </ul>
                                        </div>
                                    </label>
                                </div>
                            </span>
                        </div>
                    </TabPanel>
                </Tabs> */}
            </div>
        </> 
    )
}

export default ManageUsertab;