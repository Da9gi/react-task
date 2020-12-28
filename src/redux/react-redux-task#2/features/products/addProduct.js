import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { productAdded } from "./productsSlice";

export default function AddProduct() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const dispatch = useDispatch();

    const onAdd = (e) => {
        setTitle("New Product");
        setContent("Temporary Product!");
    };

    const addToStore = (e) => {
        if (title && content) {
            dispatch(
                productAdded({
                    id: nanoid(),
                    title,
                    content,
                })
            );
        }
    };

    return (
        <div>
            <button type="button" onClick={onAdd}>
                Add Product
            </button>
            <button type="submit" onClick={addToStore}>
                Add to Store
            </button>
        </div>
    );
}
