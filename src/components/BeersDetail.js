import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import Axios from "axios"

let beerUrl = `https://api.punkapi.com/v2/beers`

class BeersDetail extends Component {

  state = {
    beerObj: {},
    beer_name: '',
    abv: '',
    description: '',
    foodPairings: ''
  }

  componentDidMount = async () => {
    let beerId = await this.props.match.params.id;
//     let beerObj = await this.props.beers.find((eachBeer) => eachBeer.name === beerId);
    
  
// console.log(beerObj)

//     this.setState({beerObj:beerObj})
//     console.log(this.state.beerObj);
    
    Axios.get(beerUrl, {
      params: {
        beer_name: beerId
      }
    })
    .then((res) => this.setState({beerObj:res.data[0], beer_name:res.data[0].name, abv:res.data[0].abv, description:res.data[0].description, foodPairings:res.data[0].food_pairing[0]}))
    .catch((err) => console.log(err))
    
  }

  

  render() {
    console.log(this.state)
    // let beerId = this.props.match.params.id;
    // let beerObj = this.props.beers.find((eachBeer) => eachBeer.name === beerId);
    // console.log(beerObj);
    return (
      <div>
        {this.state.beerObj ? (
          <div>
            <div>
              <Jumbotron fluid>
                <Container fluid>
                  <h1 className="display-3 beer-details">{this.state.beer_name}</h1>
                  <h4 className="beer-details">ABV: {this.state.abv}</h4>
                  <p className="lead beer-details">
                    {this.state.description} <br></br> <br></br>
                    Food pairings: {this.state.foodPairings}
                  </p>
                </Container>
              </Jumbotron>
            </div>
          </div>
        ) : (
          "Loading..."
        )}
        <section className = "back-section">
          
            <Link className="back-link back-link-btn" to="/Beer-Look-Up">
              Back
            </Link>
          
        </section>
      </div>
    );
  }
}

export default BeersDetail;








// Axios.post("https://ironrest.herokuapp.com/bubblesnsalt",{name:"Corona"})
// .then((res) => console.log(res))

// Axios.get("https://ironrest.herokuapp.com/bubblesnsalt")
// .then((res) => console.log(res))

// Axios.delete(`https://ironrest.herokuapp.com/deleteCollection/bubblesnsalt`)
