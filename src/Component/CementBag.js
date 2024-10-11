import React, { useEffect, useState } from "react";
import { Location, MoreSquare, TickCircle } from 'iconsax-react';
import { useDispatch, useSelector } from "react-redux";
import { orderDetails } from "../redux/actions/userAuth";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import Moment from 'react-moment';

const CementBag = () => {


  const dispatch = useDispatch();
  const status = useSelector((state) => state);
  const [allOrderDetails, setAllOrderDetails] = useState(null);
  
  let param = window.location.href
  param = param.split("?")[1].split("=")[1]
  //console.log(param);

  useEffect(() => {
    const apiParams = {param};
    dispatch(orderDetails(apiParams));
}, [param]);

  useEffect(() => {
    if (status.orderDetails.data !== "") {
        if (status.orderDetails.data.status === 200) {
          setAllOrderDetails(status.orderDetails.data.data);
        }
    } else {
        if (status.orderDetails.data.response != null) {
        toast.error(status.orderDetails.data.response.data.error ? status.orderDetails.data.response.data.error : status.orderDetails.data.response.data,{
            position: "bottom-right",
            theme: "colored",
          });
        }else{
            toast.error(status.orderDetails.data.message,{
                position: "bottom-right",
                theme: "colored",
            });
            }
        }
  }, [status.orderDetails]);

  console.log(allOrderDetails);

  return allOrderDetails ? (
    <>
      <div className="cementBag">
        <div className="cementext">
          <h2>{allOrderDetails.userName} - {allOrderDetails.role} <Link to="/"></Link></h2>
          <p>Ref {allOrderDetails.orderedId} <span className="bullets"></span> {allOrderDetails.quantity} items <span className="bullets"></span> <Moment fromNow>{allOrderDetails.createdAt}</Moment></p>
        </div>
        <div className="ShippingAddress">
          <div className="cementextLeft">
            <p>Current Address</p>
            <h3>{allOrderDetails.userAddress}</h3>
          </div>
          <div className="cementextLeft">
            <p>Shipping Address</p>
            <h3><b>{allOrderDetails.userName} - {allOrderDetails.role}</b><span><Link to="/dashboard/dealer-address"><Location /><br />TRACK</Link></span> <br />{allOrderDetails.shippingAddress}</h3>
          </div>
        </div>
        <div className="Scanitems">
          <h2>Scan items <span className="bullets"></span> <b>Left 3 out of {allOrderDetails.items.length}</b></h2>
          <p>Order auto move to In Stock after all items are scanned</p>
        </div>

        {
          allOrderDetails.items?.map((innerItem, ind) => {
            return (
            <div className="cementIn" key={ind}>
            <Link to={`/dashboard/bag-details?id=${innerItem.qr_id}`} onClick={() => window.sessionStorage.setItem('qr-id', innerItem.qr_id)}>
              <div className="cementextLeft">
                <h3>QR {innerItem.qr_id}</h3>
                <p>{innerItem.ordered_items_scan_history?.[0].ordered_items_scan_history_discrepancy === true ? <span className="red">Discrepancy</span> : <span className="green">Open</span>} <span className="bullets"></span> <Moment fromNow>{innerItem.scanned_at}</Moment></p>
              </div>
            </Link>
            <div className="cementextRight">
            {innerItem.ordered_items_scan_history?.[0].ordered_items_scan_history_discrepancy === true ? <label><button className="green"><TickCircle /><br /><span>Scanned</span></button></label> : ''}
              <label><Link to={`/dashboard/bag-details?id=${innerItem.qr_id}`} onClick={() => window.sessionStorage.setItem('qr-id', innerItem.qr_id)}><button className="FirstBTncolor"><MoreSquare /><br /><span>VIEW</span></button></Link> </label>
            </div>

          </div>
            )
          }
          )
        }
          

     

        {/* <div className="cementIn">
          <Link to="/dashboard/bag-details">
            <div className="cementextLeft">
              <h3>QR #1241</h3>
              <p><span className="red">Discrepancy</span> <span className="bullets"></span> 1 hour ago</p>
            </div>
          </Link>
          <div className="cementextRight">
            <label><Link to="/dashboard/bag-details"><button className="FirstBTncolor"><MoreSquare /><br /><span>VIEW</span></button></Link> </label>
          </div>
        </div> */}
        {/* <div className="cementIn">
          <Link to="">
            <div className="cementextLeft">
              <h3>QR #1242</h3>
              <p><span className="green">Open</span> <span className="bullets"></span> 1 hour ago</p>
            </div>
          </Link>
          <div className="cementextRight">
          <label><Link to="/dashboard/bag-details"><button className="FirstBTncolor"><MoreSquare /><br /><span>VIEW</span></button></Link> </label>
          </div>

        </div> */}
        {/* <div className="cementIn">
          <Link to="">
            <div className="cementextLeft">
              <h3>QR #1243</h3>
              <p><span className="green">Open</span> <span className="bullets"></span> 1 hour ago</p>
            </div>
          </Link>
          <div className="cementextRight">
          <label><Link to="/dashboard/bag-details"><button className="FirstBTncolor"><MoreSquare /><br /><span>VIEW</span></button></Link> </label>
          </div>
        </div> */}
        {/* <div className="cementIn">
          <Link to="">
            <div className="cementextLeft">
              <h3>QR #1244</h3>
              <p><span className="green">Open</span> <span className="bullets"></span> 1 hour ago</p>
            </div>
          </Link>
          <div className="cementextRight">
            <label><button className="green"><TickCircle /><br /><span>Scanned</span></button></label>
            <label><Link to="/dashboard/bag-details"><button className="FirstBTncolor"><MoreSquare /><br /><span>VIEW</span></button></Link> </label>
          </div>
        </div> */}
        {/* <div className="cementIn">
          <Link to="">
            <div className="cementextLeft">
              <h3>QR #1245</h3>
              <p><span className="green">Open</span> <span className="bullets"></span> 1 hour ago</p>
            </div>
          </Link>
          <div className="cementextRight">
            <label><button className="green"><TickCircle /><br /><span>Scanned</span></button></label>
            <label><Link to="/dashboard/bag-details"><button className="FirstBTncolor"><MoreSquare /><br /><span>VIEW</span></button></Link> </label>
          </div>
        </div> */}
      </div>
    </>
  ): null
}

export default CementBag;