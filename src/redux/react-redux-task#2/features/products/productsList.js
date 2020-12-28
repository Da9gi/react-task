import React from "react";
import { useSelector } from "react-redux";

export default function ProductsList() {
    const products = useSelector((state) => state.products);
    const renderedProducts = products.map((product) => (
        <article key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.content}</p>
        </article>
    ));

    return <div>{renderedProducts}</div>;
}
