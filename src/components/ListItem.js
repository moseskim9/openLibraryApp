import React, { Component } from "react";

class ListItem extends Component {
  render() {
    const { title, first_publish_year, publisher } = this.props.list;
    const url = `https://openlibrary.org/search?q=${title}&mode=ebooks&m=edit&m=edit&has_fulltext=true`;
    return (
      <div class="container">
        <div class="row mb-4">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Title: {title}</h5>
                <p class="card-text">
                  Author:{" "}
                  {this.props.list.author_name
                    ? this.props.list.author_name[0]
                    : "N/A"}
                </p>
                <p>Publisher: {publisher}</p>
                <p>First Published Year: {first_publish_year}</p>
                <a href={url} class="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Title: {title}</h5>
                <p class="card-text">
                  Author:{" "}
                  {this.props.list.author_name
                    ? this.props.list.author_name[0]
                    : "N/A"}
                </p>
                <p>Publisher: {publisher}</p>
                <p>First Published Year: {first_publish_year}</p>
                <a href={url} class="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;
