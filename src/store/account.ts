import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export const accountStore = createAsyncThunk('/api/account',
    async (res: any) => {

    }
);
const accountSlice = createSlice(
    {
        name: 'account',
        initialState: {
            obj: {
                id: null,
                name: null,
                phone: null,
                email: null,
            }
        },
        // cac action
        reducers: {
            saveBeginEdit: (state, action) => {
                state.obj = action.payload;
            },
            getAccountClick: (state, action) => {
                state.obj = action.payload
            }

        },
        // call api
        extraReducers: {
        },
    }
);

export const { saveBeginEdit, getAccountClick } = accountSlice.actions;
const { reducer: accountReducer } = accountSlice;
export default accountReducer;
