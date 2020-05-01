import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import {Link} from 'react-router-dom'

class Beers extends Component {

state = {
  addBeer : false
}

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

  clickMethod = () => this.setState({addBeer:!this.state.addBeer })
  
  addBeerForm = () => {
    if(this.state.addBeer) {
      return (
        <section className = 'add-new-beer'>
          <form>
            <input className="add-beer-form" type = 'text' placeholder = 'beer name'/>
            <input className="add-beer-form" type = 'text' placeholder= 'ABV'/>
            <input className="add-beer-form" type = 'text' placeholder= 'Descriptions'/>
            <input className="add-beer-form" type = 'text' placeholder= 'Food Pairings'/>
            <input className="add-beer-form" type = 'submit'></input>
          </form>
        </section>
      )
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <input
          type="text"
          placeholder="Search Beers!"
          onChange={(e) => this.props.beerSearch(e)}
        ></input>
        <button onClick={this.clickMethod}> Add Beer </button>
        {this.addBeerForm()}
        {this.displayBeers()}
      </div>
    );
  }
}

export default Beers;
