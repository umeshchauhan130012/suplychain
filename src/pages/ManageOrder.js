import React from "react";
import RecentOrders from "../Component/RecentOrders";
import OrdersSummary from "../Component/OrdersSummary";
import NewOrderRequest from "../Component/NewOrderRequest";
import { ArrowLeft2 } from 'iconsax-react';
import { Link } from "react-router-dom";


const ManageOrder = () => {
    return (
        <>
            <h4><Link to="/"><ArrowLeft2 />Back to All Orders</Link></h4>
            <div className="MainCreateWarip">
                <div className="CreateNewUserWarip">
                    <div className="SuccessADDbg">
                        <NewOrderRequest />
                    </div>
                </div>
                <div className="UserBoxWarip">
                    <OrdersSummary />
                    <RecentOrders />
                </div>
            </div>
        </>
    )
}

export default ManageOrder;