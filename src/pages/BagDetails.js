import React from "react";
import RecentOrders from "../Component/RecentOrders";
import CementBagDetails from "../Component/CementBagDetails";
import OrdersSummary from "../Component/OrdersSummary";
import { ArrowLeft2 } from 'iconsax-react';
import { Link } from "react-router-dom";


const BagDetails = () => {
    return (
        <>

            <h4><Link to={`/dashboard/cement-bag-page?id=${window.sessionStorage.getItem('qr-id')}`}><ArrowLeft2 />Back to All Orders</Link></h4>
            <div className="MainCreateWarip">
                <div className="CreateNewUserWarip">
                    <div className="SuccessADDbg">
                        <CementBagDetails />
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

export default BagDetails;