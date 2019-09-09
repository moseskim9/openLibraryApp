import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";

import Search from "./components/Search";
import List from "./components/List";

import store from "./store";

class App extends Component {
  render() {
    console.log("state", this.state);
    return (
      <Provider store={store}>
        <div className="App">
          <div class="jumbotron">
            <h1 class="display-4">Welcome Open Library Search App</h1>
            <p class="lead">
              A Simple App to Browse Through Our Library With The Given Title
            </p>
            <hr class="my-4"></hr>
            <p>Please type the title of the book for results</p>
            <Search />
          </div>
          <List />
        </div>
      </Provider>
    );
  }
}

export default App;
