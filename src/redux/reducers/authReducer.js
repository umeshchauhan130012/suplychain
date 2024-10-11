import { user } from "../constant";

const initialValue = { data: "" };

export const userLoginReducer = (state = initialValue, action) => {
  switch (action.type) {
    case user.USER_LOGIN:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    case user.USER_LOGIN_FAILED:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};

export const userSignUpReducer = (state = initialValue, action) => {
  switch (action.type) {
    case user.USER_SIGNUP:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    case user.USER_SIGNUP_FAILED:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};

export const countryReducer = (state = initialValue, action) => {
  switch (action.type) {
    case user.COUNTRY:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    case user.COUNTRY_FAILED:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};

export const stateReducer = (state = initialValue, action) => {
  switch (action.type) {
    case user.STATE:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    case user.STATE_FAILED:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};

export const roleReducer = (state = initialValue, action) => {
  switch (action.type) {
    case user.ROLE:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    case user.ROLE_FAILED:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};

export const changePasswordReducer = (state = initialValue, action) => {
  switch (action.type) {
    case user.CHANGE_PASSWORD:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    case user.CHANGE_PASSWORD_FAILED:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};

export const logoutReducer = (state = initialValue, action) => {
  switch (action.type) {
    case user.LOGOUT:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    case user.LOGOUT_FAILED:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};

export const profileReducer = (state = initialValue, action) => {
  switch (action.type) {
    case user.PROFILE:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    case user.PROFILE_FAILED:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};

export const profileUpdateReducer = (state = initialValue, action) => {
  switch (action.type) {
    case user.PROFILE_UPDATE:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    case user.PROFILE_UPDATE_FAILED:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};

export const dashboardReducer = (state = initialValue, action) => {
  switch (action.type) {
    case user.DASHBOARD:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    case user.DASHBOARD_FAILED:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};

export const allUsersReducer = (state = initialValue, action) => {
  switch (action.type) {
    case user.ALL_USERS:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    case user.ALL_USERS_FAILED:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};

export const allOrderReducer = (state = initialValue, action) => {
  switch (action.type) {
    case user.ALL_ORDER:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    case user.ALL_ORDER_FAILED:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};

export const userProfileReducer = (state = initialValue, action) => {
  switch (action.type) {
    case user.USER_PROFILE:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    case user.USER_PROFILE_FAILED:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};

export const userProfileUpdateReducer = (state = initialValue, action) => {
  switch (action.type) {
    case user.USER_PROFILE_UPDATE:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    case user.USER_PROFILE_UPDATE_FAILED:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};

export const deleteUserReducer = (state = initialValue, action) => {
  switch (action.type) {
    case user.DELETE_USER:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    case user.DELETE_USER_FAILED:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};

export const deactivateUserReducer = (state = initialValue, action) => {
  switch (action.type) {
    case user.DEACTIVATE_USER:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    case user.DEACTIVATE_USER_FAILED:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};

export const orderDetailsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case user.ORDER_DETAILS:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    case user.ORDER_DETAILS_FAILED:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};

export const orderItemDetailsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case user.ORDER_ITEM_DETAILS:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    case user.ORDER_ITEM_DETAILS_FAILED:
      console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};



