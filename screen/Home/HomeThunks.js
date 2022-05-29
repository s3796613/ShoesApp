import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'product/fetch',
    async () => {
        const resp = await fetch('http://svcy3.myclass.vn/api/Product')
        const json = await resp.json()
        return json.content
    }
)

export const fetchCategories = createAsyncThunk(
    'category/fetch',
    async () => {
        const resp = await fetch('http://svcy3.myclass.vn/api/Product/getAllCategory')
        const json = await resp.json()
        return json.content
    }
)

export const fetchProductByCategoryId = createAsyncThunk(
    'product/fetchByCategory',
    async (categoryId) => {
        const resp = await fetch(`http://svcy3.myclass.vn/api/Product/getProductByCategory?categoryId=${categoryId}`)
        const json = await resp.json()
        return json.content
    }
)

