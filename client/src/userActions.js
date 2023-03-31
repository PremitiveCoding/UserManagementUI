import axios from 'axios';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchUsers = () => {
  return async dispatch => {
    dispatch({ type: FETCH_USERS_REQUEST });
    try {
      const response = await axios.get('/user/all');
      const users = response.data;
      dispatch({ type: FETCH_USERS_SUCCESS, payload: users });
    } catch (error) {
      dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
    }
  };
};

export const createUser = (user) => {
  return async dispatch => {
    try {
      const response = await axios.post('/user/add', user);
      const newUser = response.data;
      dispatch({ type: CREATE_USER_SUCCESS, payload: newUser });
    } catch (error) {
      dispatch({ type: CREATE_USER_FAILURE, payload: error.message });
    }
  };
};
