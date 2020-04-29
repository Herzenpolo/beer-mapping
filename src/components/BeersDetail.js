import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class BeersDetail extends Component {
  render() {
    let beerId = this.props.match.params.id;
    let beerObj = this.props.beers.find((eachBeer) => eachBeer.name === beerId);
    console.log(beerObj);
    return (
      <div>
        {beerObj ? (
          <div>
            <div>
              <Jumbotron fluid>
                <Container fluid>
                  <h1 className="display-3">{beerObj.name}</h1>
                  <h4>ABV: {beerObj.abv}</h4>
                  <p className="lead">
                  {beerObj.description} <br></br>
                  Food pairings: {beerObj.food_pairing[0]}
                  </p>
                  
                </Container>
              </Jumbotron>
            </div>
          </div>
        ) : (
          "Loading..."
        )}
        <img className="beer-pic" src = {beerObj.image_url} alt = {beerObj.name}></img>
        <section><Button color="danger"><Link className='back-link' to = '/Beer-Look-Up'>Back</Link></Button>{' '}</section>
      </div>
    );
  }
}

export default BeersDetail;
