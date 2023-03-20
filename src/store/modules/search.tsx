import { createSlice } from "@reduxjs/toolkit";
import { searchStateProps } from "../../components/category/_Category.interface";

const initialState: searchStateProps = {
    category: null,
    keyword: null,
    region: null,
    startDue: null,
    endDue: null,
    size: 8,
    pageNum: 1,
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchData: (state, action) => {
            return { ...state, ...action.payload };
        },
        resetData: (state) => {
            return initialState;
        },
    },
});

export default searchSlice.reducer;
export const { setSearchData, resetData } = searchSlice.actions;