import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import ProductsList from "./features/products/productsList";
import AddProduct from "./features/products/addProduct";

export default function ShoppingCart() {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <React.Fragment>
                            <ProductsList />
                            <AddProduct />
                        </React.Fragment>
                    )}
                />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}
