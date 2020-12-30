import withStorage from "./withStorage";

export const productsList = [
  { id: 101, title: "Item#1", price: 10, isInStock: true },
  { id: 102, title: "Item#2", price: 107, isInStock: true },
  { id: 103, title: "Item#3", price: 100, isInStock: true },
  { id: 104, title: "Item#4", price: 20, isInStock: true },
  { id: 105, title: "Item#5", price: 45, isInStock: true },
  { id: 106, title: "Item#6", price: 67, isInStock: true },
  { id: 107, title: "Item#7", price: 81, isInStock: true },
  { id: 108, title: "Item#8", price: 222, isInStock: true },
  { id: 109, title: "Item#9", price: 18, isInStock: true },
  { id: 110, title: "Item#10", price: 91, isInStock: true },
];

function Products({ load, save }) {
  const loadProducts = () => {
    const allProducts = load("products");
    return allProducts
      ? allProducts
      : () => {
          save("products", productsList);
          return load("products");
        };
  };
  return loadProducts();
}

const enhancer = withStorage(Products);
export default enhancer;
