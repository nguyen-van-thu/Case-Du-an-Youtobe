import {configureStore} from "@reduxjs/toolkit";
import videoReducer from "../redux/slice"

export const store = configureStore({
    reducer: {
        videos: videoReducer
    }
})