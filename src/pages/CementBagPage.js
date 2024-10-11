import React from "react";
import RecentOrders from "../Component/RecentOrders";
import OrdersSummary from "../Component/OrdersSummary";
import CementBag from "../Component/CementBag";
import { ArrowLeft2 } from 'iconsax-react';
import { Link } from "react-router-dom";


const CementBagPage = () => {
    return (
        <>
            <h4><Link to="/dashboard/order-tab"><ArrowLeft2 />Back to All Orders111</Link></h4>
            <div className="MainCreateWarip">
                <div className="CreateNewUserWarip">
                    <div className="SuccessADDbg">
                        <CementBag />
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

export default CementBagPage;