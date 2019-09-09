import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../actions/searchActions";
import PropTypes from "prop-types";

class Search extends Component {
  onChange = e => {
    e.preventDefault();
    this.props.fetchItems(e.target.value);
  };

  render() {
    return (
      <div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              Enter Title Here:
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="The Lord of the Rings..."
            aria-describedby="basic-addon1"
            onChange={this.onChange}
          ></input>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  fetchItems: PropTypes.func.isRequired
};

export default connect(
  null,
  { fetchItems }
)(Search);
