import { createSlice } from "@reduxjs/toolkit"
import { getAllVideo, getDetailVideo } from "./apis"

const initialState ={ 
    user: {
        isLoading: false,
        errorMessage: '',
        currentUser: null,
    },
    videos: [
    ],
    video: null
}

const videoSlice = createSlice({
    name: "case5",
    initialState,
    reducers: {
        LoginGG: (state, data) => {
            state.user.currentUser = data.payload;
        },

        logout: (state) => {
            state.currentUser = null;
            state.errorMessage = '';
        },  
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllVideo.fulfilled, (state, action) => {
            state.videos = action.payload
        })
        .addCase(getDetailVideo.fulfilled, (state, action) => {
            state.video = action.payload
        })
    }
})

export default videoSlice.reducer;

export const { LoginGG, logout } = videoSlice.actions