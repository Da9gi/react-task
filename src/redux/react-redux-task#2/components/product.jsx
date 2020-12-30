import React, { useEffect } from "react";
import { connect } from "react-redux";

import { AddCart, fetchProducts } from "../actions";
import { Grid, Show, ButtonSubmit, Title } from "../styles/Styles";

function ProductsList(props) {
  const { products } = props.product;
  const { fetchProducts, AddCart } = props;
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

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
  return {
    product: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    AddCart: (product) => dispatch(AddCart(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
