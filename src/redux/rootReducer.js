import { combineReducers } from 'redux';

// Import your reducers here
import { authReducer } from './authReducer';
// Combine your reducers
const rootReducer = combineReducers({
	authReducer,
	// Add more reducers here
});

export default rootReducer;
