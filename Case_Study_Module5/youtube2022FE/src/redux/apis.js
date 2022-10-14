import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "http://localhost:3001/video";

export const getAllVideo = createAsyncThunk(
    'case5/getAll',
    async () => {
        const response = await axios.get(baseURL);
        return response.data;
    }
)

export const getDetailVideo = createAsyncThunk(
    'case5/getDetailVideo',
    async (id) => {
        const response = await axios.get(`${baseURL}/${id}`);
        return response.data;
    }
)
