import { takeEvery, put, call } from "redux-saga/effects";

import { FETCHED_PRODUCTS, GetAllProduct } from "../actions";
import API from "../api";

const getData = async ({ page, perPage }) => {
  const { fetchProductsLimited } = API();
  return await fetchProductsLimited("/products/fetch", page, perPage);
};

export function* sagaWatcher() {
  yield takeEvery(FETCHED_PRODUCTS, fetchProducts);
}

function* fetchProducts(action) {
  const { products, total_count } = yield call(getData, {
    page: action.page,
    perPage: action.perPage,
  });
  yield put(GetAllProduct({ products: products, total_count: total_count }));
}
