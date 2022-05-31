import {
  SIGNUP_REQUEST_PROCESS,
  SIGNUP_REQUEST_ERROR,
  SIGNUP_SUCCESS
} from "./actions";

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  isAuth: false,
  accessToken: "",
  refreshToken: "",
  user: {
    id: "",
    name: "",
    email: ""
  }
};

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST_PROCESS:
      return { ...state, isError: false, errorMessage: "", isLoading: true };
    case SIGNUP_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        user: action.data.user,
        accessToken: action.data.accessToken,
        refreshToken: action.data.refreshToken
      };
    default:
      return state;
  }
};
