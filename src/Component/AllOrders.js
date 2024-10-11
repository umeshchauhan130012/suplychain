import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ShoppingBag,TruckFast, Shop } from 'iconsax-react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allOrder } from "../redux/actions/userAuth";
import { toast } from 'react-toastify';
import Moment from 'react-moment';

const AllOrders = () => {

  const dispatch = useDispatch();
  const status = useSelector((state) => state);
  const [activeData, setActiveData] = useState("");
  const [allOrderDetails, setAllOrderDetails] = useState([]);

  useEffect(() => {
      const apiParams = {activeData};
      dispatch(allOrder(apiParams));
  }, [activeData]);

  useEffect(() => {
    if (status.allOrder.data !== "") {
        if (status.allOrder.data.status === 200) {
          setAllOrderDetails(status.allOrder.data.data);
        }
    } else {
        if (status.allOrder.data.response != null) {
        toast.error(status.allOrder.data.response.data.error ? status.allOrder.data.response.data.error : status.allOrder.data.response.data,{
            position: "bottom-right",
            theme: "colored",
          });
        }else{
            toast.error(status.allOrder.data.message,{
                position: "bottom-right",
                theme: "colored",
            });
            }
        }
  }, [status]);

    return (
        <>
        <div className="MyOrderTab">
        
          <div className="react-tabs" data-rttabs="true">
            <ul className="react-tabs__tab-list">
                <li className={` react-tabs__tab ${activeData === '' ? 'react-tabs__tab--selected': '' }`} onClick={()=> setActiveData('')}>All Orders</li>
                <li className={` react-tabs__tab ${activeData === 'open' ? 'react-tabs__tab--selected': '' }`}  onClick={()=> setActiveData('open')}>Open</li>
                <li className={` react-tabs__tab ${activeData === 'in stock' ? 'react-tabs__tab--selected': '' }`} onClick={()=> setActiveData('in stock')}>In Stock</li>
                <li className={` react-tabs__tab ${activeData === 'in transfer' ? 'react-tabs__tab--selected': '' }`} onClick={()=> setActiveData('in transfer')}>In Transfer</li>
                <li className={` react-tabs__tab ${activeData === 'sold out' ? 'react-tabs__tab--selected': '' }`} onClick={()=> setActiveData('sold out')}>Sold Out</li>
            </ul>
            <div className="react-tabs__tab-panel react-tabs__tab-panel--selected">
            {
              allOrderDetails && allOrderDetails.map((item, index)=> 
              <div className={`RecentBoxInner ${item.status === 'open' ? 'green' : item.status === 'in stock' ? 'yellow' : item.status === 'in transfer' ? 'blue' : 'red' } `} key={index}>
                <Link to={`/dashboard/cement-bag-page?id=${item.orderId}`}>
                  <div className="RecentBoxInner-text">
                    <h3>{item.name} - {item.role}</h3>
                    <p>Ref {item.orderId} <span className="bullets"></span> {item.quantity} <span className="bullets"></span> <span><Moment fromNow>{item.createdAt}</Moment></span></p>
                  </div>
                  <div className="RecentBoxInner-img">
                  <span>{item.status}</span>
                  ${item.status === 'open' ? <TruckFast /> : item.status === 'in stock' ? <Shop /> : item.status === 'in transfer' ? <TruckFast /> : <ShoppingBag /> }
                  
                  </div>
                </Link>
              </div>
              )
            }
            </div>
          </div>



            {/* <Tabs>
                <TabList>
                    <Tab>All Orders</Tab>
                    <Tab>Open</Tab>
                    <Tab>In Stock</Tab>
                    <Tab>In Transfer</Tab>
                    <Tab>Sold Out</Tab>
                </TabList>

                <TabPanel>
                <div className="RecentBoxInner">
                <Link to="/dashboard/Cement-Bag-Page">
                    <div className="RecentBoxInner-text PaddFild">
                      <h3>Raj Kumar - Dealer</h3>
                      <p>Ref #12345678 <span className="bullets"></span> 3 of 5 items <span className="bullets"></span> <span>1 hour ago</span></p>
                    </div>
                    <div className="RecentBoxInner-img green">
                    <span>Open</span>
                      <TruckFast />
                    </div>
                    </Link>
                </div>
                <div className="RecentBoxInner">
                <Link to="/dashboard/Cement-Bag-Page">
                    <div className="RecentBoxInner-text PaddFild">
                      <h3>Sam Kumar - Dealer</h3>
                      <p>Ref #12345678 <span className="bullets"></span> 4 of 4 items <span className="bullets"></span> <span>1 hour ago</span></p>
                    </div>
                    <div className="RecentBoxInner-img yellow">
                    <span>In Stock</span>
                      <Shop />
                    </div>
                    </Link>
                </div>
                <div className="RecentBoxInner yellow">
                <Link to="/dashboard/Cement-Bag-Page">
                    <div className="RecentBoxInner-text PaddFild">
                      <h3>Prism Cement - Super Admin</h3>
                      <p>Ref #12345678 <span className="bullets"></span> 2 of 2 items <span className="bullets"></span> <span>1 hour ago</span></p>
                    </div>
                    <div className="RecentBoxInner-img blue">
                    <span>In Transfer</span>
                      <TruckFast />
                    </div>
                    </Link>
                </div>
                <div className="RecentBoxInner">
                <Link to="/dashboard/Cement-Bag-Page">
                    <div className="RecentBoxInner-text PaddFild">
                      <h3>Raj Kumar - Retailer</h3>
                      <p>Ref #12345678 <span className="bullets"></span> 3 of 5 items <span className="bullets"></span> <span>1 hour ago</span></p>
                    </div>
                    <div className="RecentBoxInner-img green">
                    <span>Open</span>
                      <TruckFast />
                    </div>
                    </Link>
                </div>
                <div className="RecentBoxInner ">
                <Link to="/dashboard/Cement-Bag-Page">
                    <div className="RecentBoxInner-text PaddFild">
                      <h3>Sam Kumar - Retailer</h3>
                      <p>Ref #12345678 <span className="bullets"></span> 4 of 4 items <span className="bullets"></span> <span>1 hour ago</span></p>
                    </div>
                    <div className="RecentBoxInner-img yellow">
                    <span>In Stock</span>
                      <Shop />
                    </div>
                    </Link>
                </div>
                <div className="RecentBoxInner green">
                <Link to="/dashboard/Cement-Bag-Page">
                    <div className="RecentBoxInner-text PaddFild">
                      <h3>Prism Cement - Admin</h3>
                      <p>Ref #12345678 <span className="bullets"></span> 2 of 2 items <span className="bullets"></span> <span>1 hour ago</span></p>
                    </div>
                    <div className="RecentBoxInner-img red">
                    <span>Sold Out</span>
                      <ShoppingBag />
                    </div>
                    </Link>
                </div>
                </TabPanel>
                <TabPanel>
                <div className="RecentBoxInner">
                <Link to="/dashboard/Cement-Bag-Page">
                    <div className="RecentBoxInner-text PaddFild">
                      <h3>Raj Kumar - Dealer</h3>
                      <p>Ref #12345678 <span className="bullets"></span> 3 of 5 items <span className="bullets"></span> <span>1 hour ago</span></p>
                    </div>
                    <div className="RecentBoxInner-img green">
                    <span>Open</span>
                      <TruckFast />
                    </div>
                    </Link>
                </div>
                <div className="RecentBoxInner">
                <Link to="/dashboard/Cement-Bag-Page">
                    <div className="RecentBoxInner-text PaddFild">
                      <h3>Raj Kumar - Retailer</h3>
                      <p>Ref #12345678 <span className="bullets"></span> 3 of 5 items <span className="bullets"></span> <span>1 hour ago</span></p>
                    </div>
                    <div className="RecentBoxInner-img green">
                    <span>Open</span>
                      <TruckFast />
                    </div>
                    </Link>
                </div>
                </TabPanel>

                <TabPanel>
                 <div className="RecentBoxInner">
                <Link to="/dashboard/Cement-Bag-Page">
                    <div className="RecentBoxInner-text PaddFild">
                      <h3>Sam Kumar - Dealer</h3>
                      <p>Ref #12345678 <span className="bullets"></span> 4 of 4 items <span className="bullets"></span> <span>1 hour ago</span></p>
                    </div>
                    <div className="RecentBoxInner-img yellow">
                    <span>In Stock</span>
                      <Shop />
                    </div>
                    </Link>
                </div>
                <div className="RecentBoxInner ">
                <Link to="/dashboard/Cement-Bag-Page">
                    <div className="RecentBoxInner-text PaddFild">
                      <h3>Sam Kumar - Retailer</h3>
                      <p>Ref #12345678 <span className="bullets"></span> 4 of 4 items <span className="bullets"></span> <span>1 hour ago</span></p>
                    </div>
                    <div className="RecentBoxInner-img yellow">
                    <span>In Stock</span>
                      <Shop />
                    </div>
                    </Link>
                </div>
                </TabPanel>
                <TabPanel>
                <div className="RecentBoxInner yellow">
                <Link to="/dashboard/Cement-Bag-Page">
                    <div className="RecentBoxInner-text PaddFild">
                      <h3>Prism Cement - Super Admin</h3>
                      <p>Ref #12345678 <span className="bullets"></span> 2 of 2 items <span className="bullets"></span> <span>1 hour ago</span></p>
                    </div>
                    <div className="RecentBoxInner-img blue">
                    <span>In Transfer</span>
                      <TruckFast />
                    </div>
                    </Link>
                </div>
                </TabPanel>

                <TabPanel>
                <div className="RecentBoxInner green">
                <Link to="/dashboard/Cement-Bag-Page">
                    <div className="RecentBoxInner-text PaddFild">
                      <h3>Prism Cement - Admin</h3>
                      <p>Ref #12345678 <span className="bullets"></span> 2 of 2 items <span className="bullets"></span> <span>1 hour ago</span></p>
                    </div>
                    <div className="RecentBoxInner-img red">
                    <span>Sold Out</span>
                      <ShoppingBag />
                    </div>
                    </Link>
                </div>
                </TabPanel>
            </Tabs> */}
            
            </div>
        </>
    )
}

export default AllOrders;
