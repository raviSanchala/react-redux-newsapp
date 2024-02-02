import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import React from 'react'

//This is our actions
export const fetchNews = createAsyncThunk('fetchNews', async (category) => {
    // const NewsApiKey = process.env.NEWS_API_KEY;
    const NewsApiKey = '5408c755c00242069d8ebd6671e75450';
    const url = "https://newsapi.org/v2/top-headlines?country=us&pageSize=10&category="+category.category+"&apiKey="+NewsApiKey;
    
    const response = await fetch(url);
    return response.json();
})

const initialState = {
    loading : true,
    data : [],
    page : 1,
    error : '',
    totalNumber : 10
}
const newsSlices = createSlice({
    name : "newsSlice",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = '';
        });
        builder.addCase(fetchNews.pending, (state, action) => {
            state.loading = true;
            state.error = '';
        });
        builder.addCase(fetchNews.rejected, (state, action) => {
            state.loading = false;
            state.error = "Something went wrong";
        });
    }
});

export default newsSlices.reducer;