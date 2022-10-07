import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { tasksReducer }  from '../reducers';

const rootReducer = combineReducers({
    tasks : tasksReducer,
});

export const store = configureStore({ reducer: rootReducer });
