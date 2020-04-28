import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class Cocktails extends Component {
  displayCocktail = () => {
    let cocktails = [...this.props.cocktails];
    return cocktails.map((eachCocktail) => {
      return (
        <ListGroup key={eachCocktail.strDrink}>
          <ListGroupItem>{eachCocktail.strDrink}</ListGroupItem>
        </ListGroup>
      );
    });
  };

  render() {
    return (
      <div>
        <input type="text" placeholder="Search Beers!"></input>
        {this.displayCocktail()}
      </div>
    );
  }
}

export default Cocktails;
