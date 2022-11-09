import { createSlice } from '@reduxjs/toolkit';

const Auth = createSlice({
    name: 'Auth',
    initialState: {
        authLoading: false,
        user: null
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            state.authLoading = false;
        },
        checkAuth(state) {
            state.authLoading = true;
        }
    }
});

export const {
    setUser,
    checkAuth
} = Auth.actions;

export default Auth.reducer;