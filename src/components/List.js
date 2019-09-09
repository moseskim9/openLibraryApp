import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../actions/searchActions";
import ListItem from "./ListItem";
import PropTypes from "prop-types";

class List extends Component {
  render() {
    let filteredTitles = this.props.list.filter(book => {
      return (
        book.title.toLowerCase().indexOf(this.props.title.toLowerCase()) !== -1
      );
    });
    return filteredTitles.map(list => <ListItem key={list.key} list={list} />);
  }
}

List.propTypes = {
  fetchItems: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  title: PropTypes.string
};

const mapStateToProps = state => ({
  list: state.items.items,
  title: state.items.title
});

export default connect(
  mapStateToProps,
  { fetchItems }
)(List);
