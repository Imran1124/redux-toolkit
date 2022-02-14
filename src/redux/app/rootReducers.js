import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userSlicer from '../slicers/userSlicer';
import fetchDataSlicer from '../slicers/fetchDataSlicer';


const userConfig = {
    key: 'user',
    storage
};

const rootReducers = combineReducers({
    userState: persistReducer(userConfig, userSlicer),
    fetchDataState: fetchDataSlicer
});

export default rootReducers;