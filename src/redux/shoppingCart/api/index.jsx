import axios from "axios";

export default function API() {
  let products = [];
  let total_count = 0;
  const fetchProductsApi = async (path) => {
    await axios(`${path}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        products = res.data.products;
      })
      .catch(console.error);
    return products;
  };
  const fetchProductsLimited = async (path, page, perPage) => {
    await axios(`${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: {
        page: page,
        perPage: perPage,
      },
    })
      .then((res) => {
        products = res.data.products;
        total_count = res.data.meta.total_count;
      })
      .catch(console.error);
    return { products, total_count };
  };
  return { fetchProductsApi, fetchProductsLimited };
}
