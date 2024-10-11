import React from "react";
import RecentOrders from "../Component/RecentOrders";
import OrdersSummary from "../Component/OrdersSummary";
import SuccessQRCode from "../Component/SuccessQRCode";
import { ArrowLeft2 } from 'iconsax-react';
import { Link } from "react-router-dom";


const OrderSuccess = () => {
    return (
        <>
            <h4><Link to="/"><ArrowLeft2 />Back to All Orders</Link></h4>
            <div className="MainCreateWarip">
                <div className="CreateNewUserWarip">
                    <div className="SuccessADDbg">
                        <SuccessQRCode />
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

export default OrderSuccess;