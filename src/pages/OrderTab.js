import React from "react";
import OrdersSummary from "../Component/OrdersSummary";
import AllOrders from "../Component/AllOrders";

const OrderTab = () => {
    return (
        <>
            {/* <h4><Link to="/Manage-Order"><AddCircle />Create New Order</Link></h4> */}
            <div className="MainCreateWarip">
                <div className="CreateNewUserWarip">
                    <div className="SuccessADDbg">
                        <AllOrders />
                    </div>
                </div>
                <div className="UserBoxWarip">
                    <OrdersSummary />
                </div>
            </div>
        </>
    )
}

export default OrderTab;