import { useEffect } from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { AddProduct, fetchProducts } from "../actions/index";
import { ButtonSubmit } from "../styles/Styles";

function AddProducts({ state, AddProduct, fetchProducts }) {
  const { products } = state;
  useEffect(() => {
    fetchProducts(products);
  }, [products, fetchProducts]);
  const history = useHistory();

  const delay = (duration) =>
    new Promise((resolve) => {
      setTimeout(resolve, duration);
    });

  const onSubmit = async (values) => {
    await delay(300);
    AddProduct({
      id: values.id,
      title: values.title,
      price: Number(values.price),
      isInStock: values.isInStock,
    });
    history.push("/components/product");
  };

  const id = products.length ? products.length + 101 : 111;

  const required = (value) => (value ? undefined : "*");

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ id: id, title: "", price: 1, isInStock: true }}
      render={({ handleSubmit, values, submitting, form, pristine }) => (
        <div>
          <Field name="title" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Product Title</label>
                <input placeholder="name" type="text" {...input} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <br />
          <Field name="price" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Product Price</label>
                <input placeholder="price" type="number" {...input} min={1} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <ButtonSubmit
            type="submit"
            style={{ cursor: "pointer" }}
            onClick={handleSubmit}
          >
            Submit
          </ButtonSubmit>
        </div>
      )}
    />
  );
}

const mapStateToProps = (state) => {
  console.log("Add:", state.rootReducer.productReducer);
  return {
    state: state.rootReducer.productReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    AddProduct: (product) => dispatch(AddProduct(product)),
    fetchProducts: (payload) => dispatch(fetchProducts(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProducts);
