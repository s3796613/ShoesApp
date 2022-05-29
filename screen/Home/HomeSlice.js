import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, fetchCategories, fetchProductByCategoryId } from "./HomeThunks";

const initialState = {
    isLoading: false,
    dataProducts: [],
    dataCategories: []
}

const homeSilce = createSlice({
    name: 'homeSlice',
    initialState,
    reducers: {
        onSelectCategory: (state, action) => {
            console.log(action.payload)
        }
    },
    extraReducers: (builder) => {
        // Update data from thunk to store.js
        builder.addCase(fetchProducts.pending,(state,action) => {
            state.isLoading = true
        }).addCase(fetchProducts.fulfilled,(state,action) => {
            state.dataProducts =  action.payload
        }).addCase(fetchCategories.pending,(state,action) => {
            state.isLoading = true
        }).addCase(fetchCategories.fulfilled,(state,action) => {
            state.dataCategories = action.payload
        }).addCase(fetchProductByCategoryId.fulfilled,(state,action) => {
            state.dataProducts = action.payload
        })
    }
})

export const {onSelectCategory} = homeSilce.actions
export default homeSilce.reducer