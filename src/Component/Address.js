import React from "react";
import { TruckFast } from 'iconsax-react';

const Address = () =>
{
    return(
        <>
        <div className="cementBag">
            <div className="cementIn cementInPadd">
              <div className="cementextLeft">
                <h3>REF #12345678</h3>
                <p>5 items <span className="bullets"></span> 1 hour ago</p>
              </div>
              <div className="cementextRight">
              <label className="green">Open <TruckFast /></label>
              </div>
            </div>
            {/* <div className="cementIn">
              <div className="cementextLeft">
                <p>Current Status</p>
                <h3><b>Raj  Kumar - Dealer</b><br /> 458 Rajiv Chowk, Rajasthan, India</h3>
              </div>
            </div> */}
            <div className="cementIn">
              <div className="cementextLeft">
              <h2>Scan History</h2>
                <p>Scan 3 <span className="bullets"></span> 2 out of 5 items <span className="bullets"></span> <label className="green">Current Location</label><em>10:30 AM</em></p>
                <h3><b>Raj Kumar - Dealer</b><br /> 458 Rajiv Chowk, Rajasthan, India</h3>
              </div>
            </div>

            <div className="cementIn">
              <div className="cementextLeft">
                <p>Scan 2 <span className="bullets"></span> 5 out of 5 items<em>05:20 AM</em></p>
                <h3><b>Sam Kumar - Dealer</b><br /> 458 Rajiv Chowk, Rajasthan, India</h3>
              </div>
            </div>
            <div className="cementIn">
              <div className="cementextLeft">
                <p>Scan 1 <span className="bullets"></span> 2 out of 5 items<em>09:15 PM</em></p>
                <h3><b>Prism Cement - Admin</b><br /> 458 Rajiv Chowk, Rajasthan, India</h3>
              </div>
            </div>
            </div>
        </>
    )
}

export default Address;