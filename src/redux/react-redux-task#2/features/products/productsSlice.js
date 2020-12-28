import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", title: "Product #1", content: "Mobile" },
    { id: "2", title: "Product #2", content: "Laptop" },
];

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        productAdded(state, action) {
            state.push(action.payload);
        },
    },
});

export const { productAdded } = productsSlice.actions;
export default productsSlice.reducer;
