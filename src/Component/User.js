import React from "react";

const User = (props) =>
{
    return(
        <>
            <div className="userbox">
                <h2>{props.hadd} {props.icon} </h2>
                <h3>{props.num}</h3>
                <p>{props.parr}</p>
                {props.iconBIG}
            </div>
        </>
    )
}

export default User;