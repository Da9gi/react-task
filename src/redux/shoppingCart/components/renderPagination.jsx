import React from "react";
import { ButtonSubmit, Td } from "../styles/Styles";

export default class RenderAllPages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }

  total_page = Math.ceil(this.props.total / this.props.perPage);
  disabled = true;

  handleNext = (e) => {
    e.preventDefault();
    this.setState(({ currentPage }) => {
      this.props.handleChange(currentPage + 1);
      return {
        currentPage: currentPage + 1,
      };
    });
  };

  handlePrev = (e) => {
    e.preventDefault();
    this.setState(({ currentPage }) => {
      this.props.handleChange(currentPage - 1);
      return {
        currentPage: currentPage - 1,
      };
    });
  };

  render() {
    return (
      <tr>
        <Td>
          <ButtonSubmit
            type="submit"
            onClick={this.handlePrev}
            disabled={this.state.currentPage > 1 ? "" : this.disabled}
          >
            Prev
          </ButtonSubmit>
        </Td>
        <Td>{`${this.state.currentPage}/${this.total_page}`}</Td>
        <Td>
          <ButtonSubmit
            type="submit"
            onClick={this.handleNext}
            disabled={
              this.state.currentPage < this.total_page ? "" : this.disabled
            }
          >
            Next
          </ButtonSubmit>
        </Td>
      </tr>
    );
  }
}
