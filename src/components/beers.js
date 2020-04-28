import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class Beers extends Component {
  displayBeers = () => {
    let beers = [...this.props.beers];
    return beers.map((eachBeer) => {
      return (
        <ListGroup key = {eachBeer.name}>
          <ListGroupItem>{eachBeer.name}</ListGroupItem>
        </ListGroup>
      );
    });
  };

  render() {
    return (
      <div>
        <input type="text" placeholder="Search Beers!"></input>
        {this.displayBeers()}
      </div>
    );
  }
}

export default Beers;
