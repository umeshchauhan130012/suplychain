import React, { useState, useEffect } from "react";
import { Grid3, ArrowRight2, AddCircle, UserOctagon, TruckFast, Setting2, ArrowSquareRight, ArrowSquareLeft } from 'iconsax-react';
import {Link, useLocation} from 'react-router-dom'


const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        document.body.classList.toggle("sidemenu_open", isOpen);
      }, [isOpen]);

    const pathname = useLocation().pathname;
    return(
        <>
           <div className="menu">
            <ul>
                <li><Link className={pathname === '/dashboard' ? 'active' : ''} to="/dashboard"><Grid3 /><small>Dashboard</small><label>Dashboard</label><ArrowRight2 /></Link></li>
                <li><Link className={pathname === '/dashboard/create-new' || pathname === '/dashboard/successfully-add-new' ? 'active' : ''} to="/dashboard/create-new"><AddCircle /><small>Create User</small><label>Create User</label><ArrowRight2 /></Link></li>
                <li><Link className={pathname === '/dashboard/manage-user' || pathname === '/dashboard/view-profile' || pathname === '/dashboard/user-edit-profile' ? 'active' : '' } to="/dashboard/manage-user"><UserOctagon /><small>Manage User</small><label>Manage User</label><ArrowRight2 /></Link></li>
                <li><Link className={pathname === '/dashboard/order-tab' ||  pathname === '/dashboard/cement-bag-page' || pathname === '/dashboard/bag-details' || pathname=== '/dashboard/dealer-address' ? 'active' : '' } to="/dashboard/order-tab"><TruckFast /><small>Orders Report</small><label>Orders Report</label><ArrowRight2 /></Link></li>
                <li><Link className={pathname === '/dashboard/general-settings' || pathname === '/dashboard/change-password' || pathname === '/dashboard/edit-profile' ? 'active' : ''} to="/dashboard/general-settings"><Setting2 /><small>Settings</small><label>Settings</label><ArrowRight2 /></Link></li>
                <li><div className="bars"><Link onClick={() => {  setIsOpen(!isOpen)  }}><ArrowSquareLeft /><ArrowSquareRight /></Link></div></li>
            </ul>
           </div>
        </>
    )
}

export default Menu;