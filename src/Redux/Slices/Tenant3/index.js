import { createSlice } from '@reduxjs/toolkit';

const Tenant3 = createSlice({
    name: 'Tenant3',
    initialState: {
        loading: false,
        companies: [],
    },
    reducers: {
        setT3Companies(state, action) {
            state.companies = action.payload;
            state.authLoading = false;
        },
        getT3Companies(state) {
            state.authLoading = true;
        },
        addT3Company(state, action) {
            state.loading = true;
        }
    }
});

export const {
    setT3Companies,
    getT3Companies,
    addT3Company
} = Tenant3.actions;

export default Tenant3.reducer;