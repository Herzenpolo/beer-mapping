import React, { Component } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

let emamKey = "822cb20fa26d9dc7add797be8364c7d7";
let emamAppId = "5ee788d0";

class Recipes extends Component {
  state = {
    recipes: [],
    q: "",
  };

  recipeSearch = (e) => {
    e.preventDefault();
    console.log(this.state);
    Axios.get(
      `https://api.edamam.com/search?q=${this.state.q}&app_id=${emamAppId}&app_key=${emamKey}&from=0&to=100`
      // q: this.state.q,
      // app_id: emamAppId,
      // app_key: emamKey,
    )
      .then((res) => this.setState({ recipes: res.data.hits }))
      .catch((err) => console.log(err));
  };

  newQuery = (e) => {
    let recipeQuery = e.target.value;
    this.setState({ q: recipeQuery });
  };

  displayRecipes = () => {
    let recipes = [...this.state.recipes];
    console.log(recipes);
    return recipes.map((eachRecipe) => {
      return (
        <Card className = 'recipe-card' key = {eachRecipe.recipe.label}>
          <CardImg
            className="foodImg"
            top
            width="50%"
            src={eachRecipe.recipe.image}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{eachRecipe.recipe.label}</CardTitle>
            <Button color="success" className="recipeBtn">
              <a className = "recipe-link" href={eachRecipe.recipe.url}>Recipe!</a>
            </Button>{" "}
          </CardBody>
        </Card>
      );
    });
  };

  render() {
    console.log(this.state.recipes);
    return (
      <div>
        <form onSubmit={this.recipeSearch}>
          <input
            type="text"
            placeholder="Search Recipes!"
            onChange={(e) => this.newQuery(e)}
          />
          <input type="submit" />
          {this.displayRecipes()}
        </form>
      </div>
    );
  }
}

export default Recipes;

{
  /* <ListGroup key={eachRecipe.recipe.calories}>
          <ListGroupItem><a href = {eachRecipe.recipe.url}> <img src = {eachRecipe.recipe.image} alt = "recipe"></img></a></ListGroupItem>
        </ListGroup> */
}
