import React, {useState, useEffect} from "react";
import { TruckFast, Shop } from 'iconsax-react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
import Moment from 'react-moment';

const RecentUsers = () => {
  const status = useSelector((state) => state);
  const [recentUser, setRecentUser] = useState("");

  useEffect(() => {
      if (status.userDashboard.data !== "") {
          if (status.userDashboard.data.status === 200) {
            setRecentUser(status.userDashboard.data.data.recentUsers);
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
            <Link to="/dashboard/manage-user">
                <h2>Recent Added Users</h2>
                <div className="scrollSection">
                  {
                    recentUser && recentUser.map((dataItem, ind) =>
                      <div className="RecentBoxInner" key={ind}>
                          <div className="RecentBoxInner-img green">
                            <TruckFast />
                          </div>
                          <div className="RecentBoxInner-text">
                            <h3>{dataItem.name} - {dataItem.role}</h3>
                            <p>{dataItem.email} <span className="bullets"></span> <span><Moment fromNow>{dataItem.createdAt}</Moment></span></p>
                          </div>
                      </div>
                    )
                  }
                {/* <div className="RecentBoxInner">
                    <div className="RecentBoxInner-img green">
                      <TruckFast />
                    </div>
                    <div className="RecentBoxInner-text">
                      <h3>Admin Prism Cement</h3>
                      <p>admin@prismcement.com  <span className="bullets"></span> <span>1 hour ago</span></p>
                    </div>
                </div>
                <div className="RecentBoxInner yellow">
                    <div className="RecentBoxInner-img">
                      <Shop />
                    </div>
                    <div className="RecentBoxInner-text">
                      <h3>Admin Prism Cement</h3>
                      <p>admin@prismcement.com  <span className="bullets"></span> <span>1 hour ago</span></p>
                    </div>
                </div>
                <div className="RecentBoxInner yellow">
                    <div className="RecentBoxInner-img">
                      <Shop />
                    </div>
                    <div className="RecentBoxInner-text">
                      <h3>Prism Cement</h3>
                      <p>admin@prismcement.com  <span className="bullets"></span> <span>1 hour ago</span></p>
                    </div>
                </div>
                <div className="RecentBoxInner green">
                    <div className="RecentBoxInner-img">
                      <TruckFast />
                    </div>
                    <div className="RecentBoxInner-text">
                      <h3>Prism Cement</h3>
                      <p>admin@prismcement.com  <span className="bullets"></span> <span>1 hour ago</span></p>
                    </div>
                </div> */}
                </div>
                </Link>
            </div>
        </>
    )
}
export default RecentUsers;
