import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

class Beers extends Component {
  state = {
    addBeer: false,
  };

  // Axios.post("https://ironrest.herokuapp.com/bubblesnsalt",{name:this.props.beers[0].name})

  displayBeers = () => {
    let beers = [...this.props.beers];
    return beers.map((eachBeer) => {
      return (
        <ListGroup key={eachBeer.name}>
          <ListGroupItem>
            <Link className="beerList" to={`/beer/${eachBeer.name.replace(/ *\([^)]*\) */g, "")}`}>
              {eachBeer.name}
            </Link>
          </ListGroupItem>
        </ListGroup>
      );
    });
  };

  beerSearch = (e) => {
    console.log(e.target.value);
  };

  // clickMethod = () => this.setState({addBeer:!this.state.addBeer })

  // beerSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(e.target.value)
  //   let newBeer = {
  //     name: e.target.name.value,
  //     abv: e.target.abv.value,
  //     tagline: e.target.tagline.value,
  //     food_pairing: [e.target.food_pairing.value]
  //   }

  // }

  // addBeerForm = () => {
  //   if(this.state.addBeer) {
  //     return (
  //       <section className = 'add-new-beer'>
  //         <form onSubmit = {this.beerSubmit}>
  //           <input className="add-beer-form" id='name' name='name' type = 'text' placeholder = 'Beer Name'/>
  //           <input className="add-beer-form" id='abv' name='abv' type = 'text' placeholder= 'ABV'/>
  //           <input className="add-beer-form" id='tagline' name='tagline' type = 'text' placeholder= 'Descriptions'/>
  //           <input className="add-beer-form" id='food_pairing' name='food_pairing' type = 'text' placeholder= 'Food Pairings'/>
  //           <input className="add-beer-form" type = 'submit'></input>
  //         </form>
  //       </section>
  //     )
  //   }
  // }

  render() {
    console.log(this.state);
    return (
      <div>
       <section className = 'beerSearch'>
          <input
            className="recipeSearch"
            type="text"
            placeholder="Search Beers!"
            onChange={(e) => this.props.beerSearch(e)}
          ></input>
       </section>
        {/* <button onClick={this.clickMethod}> Add Beer </button> */}
        {/* {this.addBeerForm()} */}
        {this.displayBeers()}
      </div>
    );
  }
}

export default Beers;
