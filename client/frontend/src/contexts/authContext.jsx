import { createContext, useContext, useReducer, useCallback } from 'react';
import PropTypes from 'prop-types';
import api from '../helpers/api';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'AUTH_START':
      return {
        ...state,
        error: false,
      };

    case 'AUTH_SUCCESS':
      return {
        ...state,
        token: action.payload,
        errResponse: '',
      };

    case 'AUTH_FAILURE':
      return {
        ...state,
        error: true,
        errResponse: action.payload,
        token: null,
      };
    case 'AUTH_RESET':
      return {
        ...state,
        error: false,
        errResponse: '',
        token: null,
      };

    default:
      return state;
  }
};

// Initial state
const initialState = {
  error: false,
  errResponse: '',
  token: null,
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storedToken = localStorage.getItem('health_care_app');
  const [state, dispatch] = useReducer(authReducer, {
    ...initialState,
    token: storedToken || null,  
  });

  console.log("AUTH STATE : ",state);

  const login = useCallback(async (data) => {
    const { username, password } = data;
    dispatch({ type: 'AUTH_START' });
  
    try {
      if (username === 'name' && password === '123') {
        const sampleAccessToken = 'your_sample_access_token';
        const res = {
          data: {
            access_token: sampleAccessToken,
          },
        };
        //const res = await api.post('auth/login', data);
        console.log("RES : ", res);
        localStorage.setItem('health_care_app', res.data.access_token);
        dispatch({ type: 'AUTH_SUCCESS', payload: res.data.access_token });
        return { success: true, message: 'Login successful' };
      } else {
        dispatch({ type: 'AUTH_FAILURE', payload: 'Invalid credentials' });
        return { success: false, message: 'Invalid credentials' };
      }
    } catch (error) {
      dispatch({ type: 'AUTH_FAILURE', payload: 'Invalid token' });
      return { success: false, message: 'Invalid token' };
    }
  }, []);
  

  const logout = useCallback(() => {
    try {
      dispatch({ type: 'AUTH_RESET' });
      localStorage.removeItem('healthcare_app');
    } catch (error) {
      dispatch({ type: 'AUTH_FAILURE', payload: 'log out error!' });
    }
  }, []);
  
  // Function to check if user is authenticated
  const isAuthenticated = () => !!state.token;

  const contextValue = {
    state,
    login,
    logout,
    isAuthenticated,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  return useContext(AuthContext);
};
