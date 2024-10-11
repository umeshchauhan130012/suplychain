import React from "react";
import LoginSlider from "../Component/LoginSlider";
import Reg from "../Component/Reg";

const Registration = () => {
    return (
        <div className="login">
            <div className="container-fluid">
                <div className="row" style={{ minHeight: "100vh" }}>
                    <div className="col-lg-6 col-md-6 col-sm-12 pl pr">
                        <LoginSlider />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 pl pr">
                        <Reg />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration;