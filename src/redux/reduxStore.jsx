import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { useSelector, Provider, useDispatch } from "react-redux";

const initialState = {
    value: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "counter/incremented":
            return { ...state, value: state.value + 1 };
        case "counter/decremented":
            return { ...state, value: state.value - 1 };
        case "counter/reset":
            return { ...state, value: 0 };
        default:
            return state;
    }
};

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

const ShowCount = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const handleIncrement = (e) => dispatch({ type: "counter/incremented" });
    const handleDecrement = (e) => dispatch({ type: "counter/decremented" });
    const handleReset = (e) => dispatch({ type: "counter/reset" });
    return (
        <React.Fragment>
            {count}
            <br />
            <button type="button" onClick={handleIncrement}>
                Increment
            </button>
            <button type="button" onClick={handleDecrement}>
                Decrement
            </button>
            <button type="reset" onClick={handleReset}>
                Reset
            </button>
        </React.Fragment>
    );
};

export default function ReduxCounter() {
    return (
        <div>
            <Provider store={store}>
                <ShowCount />
            </Provider>
        </div>
    );
}
