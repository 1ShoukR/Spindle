import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import rootReducer from './rootReducer';

// Configure store with reducers and middleware
const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	// Add more middleware here if needed
});

export default store;
