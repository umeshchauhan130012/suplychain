import React, { useEffect, useState } from "react";
import User from "../Component/User";
import RecentUsers from "../Component/RecentUsers";
import RecentOrders from "../Component/RecentOrders";
import OrdersSummary from "../Component/OrdersSummary";
import { useSelector } from "react-redux";
import { UserOctagon, TruckFast, Shop } from 'iconsax-react';
import { useDispatch } from "react-redux";
import { dashboard } from "../redux/actions/userAuth";

const Dashboard = () => {
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
          }}
      }, [status]);

    return (
        <>
            <div className="BoxFlex">
                <div className="DashMainBox">
                    <User hadd="Total Users" num={orderSummary.totalUsers} parr="No. of Users Registered" icon=<UserOctagon /> iconBIG=<UserOctagon /> />
                </div>
                <div className="DashMainBox">
                    <User hadd="Total Dealers" num={orderSummary.totalDealers} parr="No. of Dealers" icon=<TruckFast /> iconBIG=<TruckFast /> />
                </div>
                <div className="DashMainBox">
                    <User hadd="Total Retailers" num={orderSummary.totalRetailers} parr="No. of Retailers" icon=<Shop /> iconBIG=<Shop /> />
                </div>
            </div>
            <div className="recentBoxSection">

                <div className="DashMainBox"><RecentUsers /></div>
                <div className="DashMainBox"><RecentOrders /></div>
                <div className="DashMainBox"><OrdersSummary /></div>
            </div>
        </>
    )
}

export default Dashboard;