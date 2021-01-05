import React, { useEffect } from "react";
import { connect } from "react-redux";

import { AddCart, fetchProducts } from "../actions";
import { Grid, Show, ButtonSubmit, Title } from "../styles/Styles";

function ProductsList(props) {
  const { products } = props.state;
  const { AddCart, fetchProducts } = props;
  useEffect(() => {
    fetchProducts(products);
  }, [products, fetchProducts]);

  if (products.length > 0) {
    return (
      <Grid>
        {products.map((product, index) => (
          <Show key={index}>
            <Title>{product.title}</Title>
            <Title size="1em">{product.price} $</Title>
            <ButtonSubmit
              type="submit"
              style={{ cursor: "pointer" }}
              onClick={() => AddCart(product)}
            >
              Add to Cart
            </ButtonSubmit>
          </Show>
        ))}
      </Grid>
    );
  }
  return <h3>Loading Data ....</h3>;
}

const mapStateToProps = (state) => {
  console.log("Products:", state.rootReducer.productReducer);
  return {
    state: state.rootReducer.productReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    AddCart: (product) => dispatch(AddCart(product)),
    fetchProducts: (payload) => dispatch(fetchProducts(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
