import React, {useState, useEffect} from "react";
import { Gallery, TruckFast } from 'iconsax-react';
import { useDispatch, useSelector } from "react-redux";
import { orderItemDetails } from "../redux/actions/userAuth";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

const CementBagDetails = () => {

  const dispatch = useDispatch();
  const status = useSelector((state) => state);
  const [orderItemData, setOrderItemData] = useState(null);
  
  let param = window.location.href
  param = param.split("?")[1].split("=")[1]
  //console.log(param);

  useEffect(() => {
    const apiParams = {param};
    dispatch(orderItemDetails(apiParams));
}, [param]);

  useEffect(() => {
    if (status.orderItemDetails.data !== "") {
        if (status.orderItemDetails.data.status === 200) {
          setOrderItemData(status.orderItemDetails.data.data);
        }
    } else {
        if (status.orderItemDetails.data.response != null) {
        toast.error(status.orderItemDetails.data.response.data.error ? status.orderItemDetails.data.response.data.error : status.orderItemDetails.data.response.data,{
            position: "bottom-right",
            theme: "colored",
          });
        }else{
            toast.error(status.orderItemDetails.data.message,{
                position: "bottom-right",
                theme: "colored",
            });
            }
        }
  }, [status.orderItemDetails]);

  console.log(orderItemData);

    return(
        <>
        <div className="cementBag">
           <div className="cementext">
                <h2>Raj Kumar - Dealer <Link to="/"></Link></h2>
                <p>Ref #12345678 <span className="bullets"></span> 5 items <span className="bullets"></span> 1 hour ago</p>
            </div>
            <div className="bag-details">
                <h2>QR #1241</h2>
                <p>A cement bag is a type of packaging used to store and transport cement, a powdery building material used for construction purposes. The details of a cement bag can vary depending on the manufacturer, but typical features... <Link to="">See More</Link></p>
            </div>
            <div className="ScanReport">
                <h2>Recent Scan History <label className="green">Open <TruckFast /></label></h2>
            </div>
            <div className="cementIn">
              <div className="cementextLeft">
                <h3>Scan 3</h3>
                <p><span className="red">Discrepancy</span> <span className="bullets"></span> 1 hour ago</p>
              </div>
              <div className="cementextRight">
              <label ><Gallery /><br/><span>View image</span></label>
              </div>
            </div>
            <div className="cementIn">
              <div className="cementextLeft">
                <h3>Scan 2</h3>
                <p><span className="red">Discrepancy</span> <span className="bullets"></span> 1 hour ago</p>
              </div>
              <div className="cementextRight">
              <label ><Gallery /><br/><span>View image</span></label>
              </div>
            </div>
            <div className="cementIn">
              <div className="cementextLeft">
                <h3>Scan 1</h3>
                <p><span className="green">Open</span> <span className="bullets"></span> 1 hour ago</p>
              </div>
              <div className="cementextRight">
              <label ><Gallery /><br/><span>View image</span></label>
              </div>
            </div>
            </div>
        </>
    )
}

export default CementBagDetails;