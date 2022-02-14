import { createSlice } from '@reduxjs/toolkit';
import { dispatch } from '../app/store';

const initialState = {
    users: {}
};

const userSlicer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userSuccess: (state, { payload }) => {
            state.users = payload
        }
    }
});

export default userSlicer.reducer;

const { userSucces } = userSlicer.actions;

export const userAction = async () => {
    try {
        const usr = { name: 'Imran', email: 'imran@gmail.com' }
        dispatch(userSucces(usr))
    } catch (error) {
        console.log(error)
    }
}