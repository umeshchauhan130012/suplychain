import React from "react";
import RecentOrders from "../Component/RecentOrders";
import OrdersSummary from "../Component/OrdersSummary";
import Address from "../Component/Address";
import { ArrowLeft2 } from 'iconsax-react';
import { Link } from "react-router-dom";


const DealerAddress = () => {
    return (
        <>
            <h4><Link to="/dashboard/Cement-Bag-Page"><ArrowLeft2 />Back to All Orders</Link></h4>
            <div className="MainCreateWarip">
                <div className="CreateNewUserWarip">
                    <div className="SuccessADDbg">
                        <Address />
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

export default DealerAddress;