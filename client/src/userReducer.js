import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE
  } from './userActions';
  
  const initialState = {
    loading: false,
    error: null,
    users: []
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return { ...state, loading: true };
      case FETCH_USERS_SUCCESS:
        return { ...state, loading: false, users: action.payload };
      case FETCH_USERS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case CREATE_USER_SUCCESS:
        return { ...state, users: [...state.users, action.payload] };
      case CREATE_USER_FAILURE:
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;
  