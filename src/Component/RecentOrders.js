import React, { useEffect, useState } from "react";
import { ShoppingBag,TruckFast, Shop } from 'iconsax-react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
import Moment from 'react-moment';

const RecentOrders = () => {

  const status = useSelector((state) => state);
  const [recentOrder, setRecentOrder] = useState("");

  useEffect(() => {
      if (status.userDashboard.data !== "") {
          if (status.userDashboard.data.status === 200) {
            setRecentOrder(status.userDashboard.data.data.recentOrders);
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
        <div className="ResentBox">
              <div className="ResentOrderS">
              <Link to="/dashboard/order-tab">
                <h2>Recent Orders</h2>
                <div className="scrollSection">
                {
                  recentOrder && recentOrder.map((dataItem, ind) =>
                    <div className="RecentBoxInner" key={ind}>
                        <div className="RecentBoxInner-text PaddFild">
                          <h3>{dataItem.name}</h3>
                          <p>Ref {dataItem.orderId} <span className="bullets"></span> {dataItem.quantity} items <span className="bullets"></span> <span><Moment fromNow>{dataItem.createdAt}</Moment></span></p>
                        </div>
                        { dataItem.status === "open" ? 
                        <div className="RecentBoxInner-img green">
                          <span>Open</span>
                          <TruckFast />
                        </div>
                        : dataItem.status === "inStock" ? 
                        <div className="RecentBoxInner-img yellow">
                          <span>In Stock</span>
                          <Shop />
                        </div> 
                        : dataItem.status === "inTransfer" ? 
                        <div className="RecentBoxInner-img blue">
                          <span>In Transfer</span>
                          <TruckFast />
                        </div> :
                        <div className="RecentBoxInner-img red">
                          <span>Sold Out</span>
                          <ShoppingBag />
                        </div>
                        }
                    </div>
                    )
                  }
                {/* <div className="RecentBoxInner ">
                    <div className="RecentBoxInner-text PaddFild">
                      <h3>Admin Prism Cement</h3>
                      <p>Ref #12345678 <span className="bullets"></span> 4 items <span className="bullets"></span> <span>1 hour ago</span></p>
                    </div>
                    <div className="RecentBoxInner-img yellow">
                      <span>In Stock</span>
                      <Shop />
                    </div>
                </div>
                <div className="RecentBoxInner yellow">
                    <div className="RecentBoxInner-text PaddFild">
                      <h3>Prism Cement</h3>
                      <p>Ref #12345678 <span className="bullets"></span> 2 items <span className="bullets"></span> <span>1 hour ago</span></p>
                    </div>
                    <div className="RecentBoxInner-img blue">
                      <span>In Transfer</span>
                      <TruckFast />
                    </div>
                </div>
                <div className="RecentBoxInner green">
                    <div className="RecentBoxInner-text PaddFild">
                      <h3>Prism Cement</h3>
                      <p>Ref #12345678 <span className="bullets"></span> 8 items <span className="bullets"></span> <span>1 hour ago</span></p>
                    </div>
                    <div className="RecentBoxInner-img red">
                      <span>Sold Out</span>
                      <ShoppingBag />
                    </div>
                </div> */}
                </div>
                </Link>
            </div>
            </div> 
        </>
    )
}

export default RecentOrders;