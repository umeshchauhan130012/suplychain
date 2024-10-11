import React from "react";
import { ArrowRight2 } from 'iconsax-react';
import { Link } from "react-router-dom";

const SuccessQRCode = () =>
{
    return(
        <>
           <div className="SuccessQR">
            <div className="SuccessQRBox">
                <div className="SuccessQRImg">
                    <img src="./image/success.png" alt="success" />
                </div>
                <div className="SuccessQRText">
                    <h2>Success</h2>
                    <p>Order has been created successfully</p>
                </div>
            </div>
            <button>download QR codes</button>
            <h5>Print QR codes to Stick on the each bags</h5>
           </div>

           <div className="PrismIndia">
           <Link to="/Cement-Bag-Page">
                <h3>Prism India <ArrowRight2 /></h3>
                <p>Ref #12345678 5 items . 1 hour ago <Link to="/Cement-Bag-Page">More</Link></p>
                </Link>
            </div>
        </>
    )
}

export default SuccessQRCode;