import { combineReducers } from "redux";
import {
  userLoginReducer,
  userSignUpReducer,
  countryReducer,
  stateReducer,
  roleReducer,
  changePasswordReducer,
  logoutReducer,
  profileReducer,
  profileUpdateReducer,
  dashboardReducer,
  allUsersReducer,
  allOrderReducer,
  userProfileReducer,
  deleteUserReducer,
  deactivateUserReducer,
  userProfileUpdateReducer,
  orderDetailsReducer,
  orderItemDetailsReducer,
} from "./authReducer";

const RootReducer = combineReducers({
  login: userLoginReducer,
  signUp: userSignUpReducer,
  country: countryReducer,
  states: stateReducer,
  userRole: roleReducer,
  userChangePassword: changePasswordReducer,
  userLogout: logoutReducer,
  userProfile: profileReducer,
  userProfileUpdate: profileUpdateReducer,
  userDashboard: dashboardReducer,
  allUsers: allUsersReducer,
  allOrder: allOrderReducer,
  viewUserProfile: userProfileReducer,
  user1ProfileUpdate: userProfileUpdateReducer,
  deleteUser: deleteUserReducer,
  deactivateUser: deactivateUserReducer,
  orderDetails: orderDetailsReducer,
  orderItemDetails: orderItemDetailsReducer,
});

export default RootReducer;
