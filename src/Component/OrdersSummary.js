import React, { useState, useEffect } from "react";
import { Shop } from 'iconsax-react';
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';

const OrdersSummary = () => {
   const status = useSelector((state) => state);
   const [orderSummary, setOrderSummary] = useState("");

  useEffect(() => {
      if (status.userDashboard.data !== "") {
          if (status.userDashboard.data.status === 200) {
            setOrderSummary(status.userDashboard.data.data.orderSummary);
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

    return(
        <>
          <div className="ResentBox OrdersSummary">
            <h2>Orders Summary <Shop /></h2>
            <h4>{orderSummary.totalCreatedOrders}</h4>
            <p>Total Created Orders</p>

            <div className="OrderSummaryNum">
                <div className="OrderSummaryText">
                    <h3>{orderSummary.openDeliveries}</h3>
                    <p className="green">Open Deliveries</p>
                </div>
                <div className="OrderSummaryText">
                    <h3>{orderSummary.inStock}</h3>
                    <p className="yellow">In Stock</p>
                </div>
            </div>
            <div className="OrderSummaryNum">
                <div className="OrderSummaryText">
                    <h3>{orderSummary.inTransfer}</h3>
                    <p className="blue">In Transfer</p>
                </div>
                <div className="OrderSummaryText">
                    <h3>{orderSummary.soldOut}</h3>
                    <p className="red">Sold Out</p>
                </div>
            </div>
          </div>
        </>
    )
}

export default OrdersSummary;