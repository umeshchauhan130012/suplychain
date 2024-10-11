import React from "react";
import Profile from "../Component/Profile";
import Personalinformation from "../Component/Personal-information";


const GeneralSettings = () => {
    return (
        <>

            <h4>General Settings</h4>
            <p>Your personal details here</p>
            <div className="MainCreateWarip">
                <div className="CreateNewUserWarip">
                    <div className="SuccessADDbg">
                        <Personalinformation />
                    </div>
                </div>
                <div className="UserBoxWarip">
                    <div className="SuccessADDbg">
                        <Profile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GeneralSettings;