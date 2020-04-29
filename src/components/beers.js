import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import {Link} from 'react-router-dom'

class Beers extends Component {
  displayBeers = () => {
    let beers = [...this.props.beers];
    return beers.map((eachBeer) => {
      return (
        <ListGroup key = {eachBeer.name}>
          <ListGroupItem><Link to = {`/beer/${eachBeer.name}`}>{eachBeer.name}</Link></ListGroupItem>
        </ListGroup>
      );
    });
  };

  beerSearch = (e) => {
    console.log(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search Beers!"
          onChange={(e) => this.props.beerSearch(e)}
        ></input>
        {this.displayBeers()}
      </div>
    );
  }
}

export default Beers;
