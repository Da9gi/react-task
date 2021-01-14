import React, { useEffect } from "react";
import { connect } from "react-redux";

import { AddCart, fetchedProducts } from "../actions";
import { Grid, Show, ButtonSubmit, Title } from "../styles/Styles";
import RenderAllPages from "./renderPagination";

export const renderPerPage = 6;

function ProductsList(props) {
  const { products } = props.state;
  const { total_count } = props.state;
  const { AddCart, fetchProducts } = props;

  useEffect(() => {
    if (!products.length) fetchProducts({ page: 1, perPage: renderPerPage });
  }, [products, fetchProducts]);

  const handleChange = (page) => {
    fetchProducts({ page: page, perPage: renderPerPage });
  };

  if (products.length > 0) {
    return (
      <React.Fragment>
        <Grid>
          {products.map((product, index) => (
            <Show key={index}>
              <Title>{product.title}</Title>
              <Title size="1em">{product.price} $</Title>
              <ButtonSubmit
                type="submit"
                style={{ cursor: "pointer" }}
                onClick={() => AddCart({ id: product.id })}
              >
                Add to Cart
              </ButtonSubmit>
            </Show>
          ))}
        </Grid>
        <Grid>
          <table>
            <tbody>
              {total_count && (
                <RenderAllPages
                  handleChange={handleChange}
                  total={total_count}
                  perPage={renderPerPage}
                />
              )}
            </tbody>
          </table>
        </Grid>
      </React.Fragment>
    );
  }
  return <h3>Loading Data ....</h3>;
}

const mapStateToProps = (state) => {
  return {
    state: state.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    AddCart: (product) => dispatch(AddCart(product)),
    fetchProducts: (page) => dispatch(fetchedProducts(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
