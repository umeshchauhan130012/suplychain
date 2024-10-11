import React, { useState, useEffect } from "react";
import CreateNewUser from "../Component/CreateNewUser";
import User from "../Component/User";
import { UserOctagon, TruckFast, Shop } from 'iconsax-react';
import { useDispatch, useSelector } from "react-redux";
import { dashboard } from "../redux/actions/userAuth";
import { toast } from 'react-toastify';

const CreateNew = () => {

    const status = useSelector((state) => state);
    const dispatch = useDispatch();
    const [orderSummary, setOrderSummary] = useState("");

    useEffect(() => {
        const apiData = {};
        dispatch(dashboard(apiData));
      },[]);

    useEffect(() => {
      if (status.userDashboard.data !== "") {
          if (status.userDashboard.data.status === 200) {
            setOrderSummary(status.userDashboard.data.data);
          } else {
              if (status.userDashboard.data.response != null) {
              toast.error(status.userDashboard.data.response.data.error ? status.userDashboard.data.response.data.error : status.userDashboard.data.response.data,{
                  position: "bottom-right",
                  theme: "colored",
                });
              }else{
                  toast.error(status.userDashboard.data.message,{
                      position: "bottom-right",
                      theme: "colored",
                  });
                  }
              }
          }
      }, [status]);

    return (
        <>
            <div className="MainCreateWarip">
                <div className="CreateNewUserWarip"><CreateNewUser /></div>
                <div className="UserBoxWarip">
                    <User hadd=" Total Users" num={orderSummary.totalUsers} parr="No. of Users Registered" icon=<UserOctagon /> iconBIG=<UserOctagon /> />
                    <User hadd="Total Dealers" num={orderSummary.totalDealers} parr="No. of Dealers" icon=<TruckFast /> iconBIG=<TruckFast /> />
                    <User hadd="Total Retailers" num={orderSummary.totalRetailers} parr="No. of Retailers" icon=<Shop /> iconBIG=<Shop /> />
                </div>
            </div>
        </>
    )
}

export default CreateNew;