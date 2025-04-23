import { combineReducers } from 'redux';
import authReducer from './auth/authSlice'; // Adjust the path to your auth slice
// Import your reducers here
// Example: import authReducer from './authReducer';
// Example: import userReducer from './userReducer';

const rootReducer = combineReducers({
    // Add your reducers here
    // Example: auth: authReducer,
    // Example: user: userReducer,
    auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;