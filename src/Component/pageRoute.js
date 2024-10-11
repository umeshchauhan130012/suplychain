import { Route, Routes } from "react-router-dom"
import BagDetails from "../pages/BagDetails"
import CementBagPage from "../pages/CementBagPage"
import ChangePassword from "../pages/ChangePassword"
import CreateNew from "../pages/CreateNew"
import Dashboard from "../pages/Dashboard"
import DealerAddress from "../pages/DealerAddress"
import EditProfile from "../pages/EditProfile"
import GeneralSettings from "../pages/GeneralSettings"
import ManageOrder from "../pages/ManageOrder"
import ManageUser from "../pages/ManageUser"
import OrderSuccess from "../pages/OrderSuccess"
import OrderTab from "../pages/OrderTab"
import PasswordSuccesspage from "../pages/PasswordSuccesspage"
import SuccessfullyAddNew from "../pages/SuccessfullyAddNew"
import SuccessPage from "../pages/SuccessPage"
import ViewProfile from "../pages/viewProfile"
import Menu from "./Menu"
import TopStrip from "./TopStrip"
import UserEditProfile from "../pages/UserEditProfile"

const PageRoute = () => {
    
    return (
        <>
        <div className='Dashboard'>
        <TopStrip />
        </div>
        <div className='HomeItms'>
        <div className='LeftMenu'>
        <Menu /> 
        </div>
        <div className='rightSection'>
        <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/SuccessPage" element={<SuccessPage />} />
            <Route exact path="/create-new" element={<CreateNew />} />
            <Route exact path="/successfully-add-new" element={<SuccessfullyAddNew />} />
            <Route exact path="/Manage-Order" element={<ManageOrder />} />
            <Route exact path="/Order-Success" element={<OrderSuccess />} />
            <Route exact path="/order-tab" element={<OrderTab />} />
            <Route exact path="/general-settings" element={<GeneralSettings />} />
            <Route exact path="/view-profile" element={<ViewProfile />} />
            <Route exact path="/edit-profile" element={<EditProfile />} />
            <Route exact path="/user-edit-profile" element={<UserEditProfile />} />
            <Route exact path="/change-password" element={<ChangePassword />} />
            <Route exact path="/cement-bag-page" element={<CementBagPage />} />
            <Route exact path="/bag-details" element={<BagDetails />} />
            <Route exact path="/manage-user" element={<ManageUser />} />
            <Route exact path="/password-success-page" element={<PasswordSuccesspage />} />
            <Route exact path="/dealer-address" element={<DealerAddress />} /> 
        </Routes>
     </div>
     </div>
     </>
    )
}

export default PageRoute