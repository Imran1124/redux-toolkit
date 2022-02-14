import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { dispatch } from '../app/store';

const initialState = {
    isLoading: false,
    isError: null,
    fethData: []
};

const fetchDataSlicer = createSlice({
    name: 'fetchdata',
    initialState,
    reducers: {
        pending: (state) => {
            state.isLoading = true;
        },

        isSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.fethData = payload
        },

        isRejected: (state, { payload }) => {
            state.isLoading = false;
            state.isError = payload;
        }
    }
});

export default fetchDataSlicer.reducer

const { pending, isSuccess, isRejected } = fetchDataSlicer.actions;

export const fetchDataAction = async () => {
    dispatch(pending());
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_start=0&_limit=2000`);
        dispatch(isSuccess(res.data))
    } catch (error) {
        dispatch(isRejected(error.message))
    }
}