import { createSlice } from '@reduxjs/toolkit';

const Tenant2 = createSlice({
    name: 'Tenant2',
    initialState: {
        loading: false,
        companies: [],
    },
    reducers: {
        setT2Companies(state, action) {
            state.companies = action.payload;
            state.authLoading = false;
        },
        getT2Companies(state) {
            state.authLoading = true;
        },
        addT2Company(state, action) {
            state.loading = true;
        }
    }
});

export const {
    setT2Companies,
    getT2Companies,
    addT2Company
} = Tenant2.actions;

export default Tenant2.reducer;