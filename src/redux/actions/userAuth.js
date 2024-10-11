import axios from "axios";
import { auth, base_url } from "../../config";
import { user } from "../constant";
import { toast } from 'react-toastify';

export const userSignup = (formData) => (dispatch) => {
  const url = `${base_url}public/user/register`;
  const headers = { Authorization: auth };
  const data = formData;
  axios.post(url, data, {headers}).then((response) => {
    dispatch({
      type: user.USER_SIGNUP,
      payload: response,
    });
  })  .catch((error) => {
    dispatch({
      type: user.USER_SIGNUP_FAILED,
      payload: error,
    });
   });
};

export const userLogin = (formData) => (dispatch) => {
  const url = `${base_url}public/login`;
  const data = formData;
  axios.post(url, data).then((response) => {
    window.sessionStorage.setItem("userToken", `Bearer ${response.data.token}`);
    dispatch({
      type: user.USER_LOGIN,
      payload: response,
    });
  })
  .catch((error) => {
    dispatch({
      type: user.USER_LOGIN_FAILED,
      payload: error,
    });
    toast.error(error.message, {
      position: "bottom-right",
      theme: "colored",
    });
   });
};

export const country = () => (dispatch) => {
  const url = `${base_url}public/country`;
  const headers = { Authorization: auth };

  axios.get(url, { headers }).then((response) => {
    dispatch({
      type: user.COUNTRY,
      payload: response,
    });
  }).catch((error) => {
    dispatch({
      type: user.COUNTRY_FAILED,
      payload: error,
    });
   });
};

export const role = () => (dispatch) => {
  const url = `${base_url}public/user-roles`;
  const headers = { Authorization: auth };

  axios.get(url, { headers }).then((response) => {
    dispatch({
      type: user.ROLE,
      payload: response,
    });
  }).catch((error) => {
    dispatch({
      type: user.ROLE_FAILED,
      payload: error,
    });
   });
};

export const states = (apiParams) => (dispatch) => {
  const url = `${base_url}public/state/${apiParams.apiParams}`;
  const headers = { Authorization: auth };
  axios.get(url, { headers }).then((response) => {
    dispatch({
      type: user.STATE,
      payload: response,
    });
  }).catch((error) => {
    dispatch({
      type: user.STATE_FAILED,
      payload: error,
    });
   });
};

export const changePassword = (formData) => (dispatch) => {
  const url = `${base_url}public/user/change-password`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: user.CHANGE_PASSWORD,
      payload: response,
    });
  }).catch((error) => {
    dispatch({
      type: user.CHANGE_PASSWORD_FAILED,
      payload: error,
    });
   });
};

export const logout = (formData) => (dispatch) => {
  const url = `${base_url}public/user/logout`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, {}, { headers }).then((response) => {
    dispatch({
      type: user.LOGOUT,
      payload: response,
    });
  }).catch((error) => {
    dispatch({
      type: user.LOGOUT_FAILED,
      payload: error,
    });
   });
};

export const profile = () => (dispatch) => {
  const url = `${base_url}public/user/profile`;
  const headers = { Authorization: auth };
  axios.get(url, { headers }).then((response) => {
    dispatch({
      type: user.PROFILE,
      payload: response,
    });
  }).catch((error) => {
    dispatch({
      type: user.PROFILE_FAILED,
      payload: error,
    });
   });
};

export const profileUpdate = (formData) => (dispatch) => {
  const url = `${base_url}public/profile`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: user.PROFILE_UPDATE,
      payload: response,
    });
  }).catch((error) => {
    dispatch({
      type: user.PROFILE_UPDATE_FAILED,
      payload: error,
    });
   });
};

export const dashboard = () => (dispatch) => {
  const url = `${base_url}public/user/dashboard`;
  const headers = { Authorization: auth };
  axios.get(url, { headers }).then((response) => {
    dispatch({
      type: user.DASHBOARD,
      payload: response,
    });
  }).catch((error) => {
    dispatch({
      type: user.DASHBOARD_FAILED,
      payload: error,
    });
   });
};

export const allUsers = (userParam) => (dispatch) => {
  var url
  if (userParam.activeData===null){
    url =  `${base_url}public/user/all`
  }else{
    url =  `${base_url}public/user/all?role=${userParam.activeData}`
  }
  
  const headers = { Authorization: auth };
  axios.get(url, { headers }).then((response) => {
    dispatch({
      type: user.ALL_USERS,
      payload: response,
    });
  }).catch((error) => {
    dispatch({
      type: user.ALL_USERS_FAILED,
      payload: error,
    });
   });
};

export const allOrder = (userParam) => (dispatch) => {
  var url
  if (userParam.activeData===null){
    url =  `${base_url}public/order`
  }else{
    url =  `${base_url}public/order?orderStatus=${userParam.activeData}`
  }
  
  const headers = { Authorization: auth };
  axios.get(url, { headers }).then((response) => {
    dispatch({
      type: user.ALL_ORDER,
      payload: response,
    });
  }).catch((error) => {  
    dispatch({
      type: user.ALL_ORDER_FAILED,
      payload: error,
    });
   });
};

export const userProfile = (userParams) => (dispatch) => {
  var url
  url =  `${base_url}public/user?userId=${userParams.param}`

  const headers = { Authorization: auth };
  axios.get(url, { headers }).then((response) => {
    dispatch({
      type: user.USER_PROFILE,
      payload: response,
    });
  }).catch((error) => {
    dispatch({
      type: user.USER_PROFILE_FAILED,
      payload: error,
    });
   });
};

export const deleteUser = (userParams) => (dispatch) => {
  var url
  if (userParams.confirm === null){
    url = ``
  }else{
    url =  `${base_url}admin/delete-user?userId=${userParams.confirm}`
  }
  const headers = { Authorization: auth };
  console.log(headers);
  axios.post(url, {},{ headers }).then((response) => {
    dispatch({
      type: user.DELETE_USER,
      payload: response,
    });
  }).catch((error) => {
    dispatch({
      type: user.DELETE_USER_FAILED,
      payload: error,
    });
   });
};

export const deactivateUser = (userParams) => (dispatch) => {
  var url
  if (userParams.confirm === null){
    url = ``
  }else{
    url =  `${base_url}admin/deactivate-user?userId=${userParams.confirm}`
  }
  const headers = { Authorization: auth };
  axios.post(url, {},{ headers }).then((response) => {
    dispatch({
      type: user.DEACTIVATE_USER,
      payload: response,
    });
  }).catch((error) => {
    dispatch({
      type: user.DEACTIVATE_USER_FAILED,
      payload: error,
    });
   });
};

export const userProfileUpdate = (formData, userId) => (dispatch) => {
  console.log(userId);
  const url = `${base_url}admin/edit-user?userId=${userId}`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.put(url, data, { headers }).then((response) => {
    dispatch({
      type: user.USER_PROFILE_UPDATE,
      payload: response,
    });
  }).catch((error) => {
    dispatch({
      type: user.USER_PROFILE_UPDATE_FAILED,
      payload: error,
    });
   });
};

export const orderDetails = (userParams) => (dispatch) => {
  var url
  url =  `${base_url}public/order/details?orderId=${userParams.param}`
  const headers = { Authorization: auth };
  axios.get(url, { headers }).then((response) => {
    dispatch({
      type: user.ORDER_DETAILS,
      payload: response,
    });
  }).catch((error) => {
    dispatch({
      type: user.ORDER_DETAILS_FAILED,
      payload: error,
    });
   });
};

export const orderItemDetails = (userParams) => (dispatch) => {
  var url
  url =  `${base_url}public/order/item/details?qr-id=${userParams.param}`
  const headers = { Authorization: auth };
  axios.get(url, { headers }).then((response) => {
    dispatch({
      type: user.ORDER_ITEM_DETAILS,
      payload: response,
    });
  }).catch((error) => {
    dispatch({
      type: user.ORDER_ITEM_DETAILS_FAILED,
      payload: error,
    });
   });
};
