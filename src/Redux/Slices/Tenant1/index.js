import { createSlice } from '@reduxjs/toolkit';

const Tenant1 = createSlice({
    name: 'Tenant1',
    initialState: {
        loading: false,
        companies: [],
    },
    reducers: {
        setT1Companies(state, action) {
            state.companies = action.payload;
            state.loading = false;
        },
        getT1Companies(state) {
            state.loading = true;
        },
        addT1Company(state, action) {
            state.loading = true;
        }
    }
});

export const {
    setT1Companies,
    getT1Companies,
    addT1Company
} = Tenant1.actions;

export default Tenant1.reducer;