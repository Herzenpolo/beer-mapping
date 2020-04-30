import React, { Component } from "react";
import Axios from "axios";

let emamUrl = "https://api.edamam.com/search";
let emamKey = "822cb20fa26d9dc7add797be8364c7d7";
let emamAppId = "5ee788d0";

class Recipes extends Component {
  state = {
    recipes: [],
    q: "",
  };

  recipeSearch = (e) => {
    e.preventDefault();
    Axios.get(emamUrl, {
      q: this.state.q,
      app_id: emamAppId,
      app_key: emamKey,
    })
      .then((res) => this.setState({ recipes: res.data.drinks }))
      .catch((err) => console.log(err));
  };

  newQuery = (e) => {
    let recipeQuery = e.target.value;
    this.setState({ q: recipeQuery });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.recipeSearch}>
          <input
            type="text"
            placeholder="Search Recipes!"
            onChange={(e) => this.newQuery(e)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Recipes;
