import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
import Beers from "./components/beers";
import Gallery from "./components/gallery";
import Header from "./components/header";
import { Switch, Route } from "react-router-dom";
import Cocktails from './components/cocktails'

let punkUrl = "https://api.punkapi.com/v2/beers";


let pexelsUrl = "https://api.pexels.com/v1/search";
let pexelsKey = "563492ad6f917000010000011dba69a3f6f04f64934d141744e85366";


let cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
let cocktailKey = '1'

class App extends Component {
  state = {
    allBeers: [],
    cocktails: [],
    allCities: [],
    locationCity: "Miami",
    locationState: "Florida",
    imgSrc: [],
    imgSearch: "duck",
  };

  componentDidMount = () => {
    Axios.get(punkUrl, {
      params : {

      }
    })
      .then((res) => this.setState({allBeers:res.data}))
      .catch((err) => console.log(err));

    Axios.get(pexelsUrl, {
      headers: {
        Authorization: pexelsKey,
      },
      params: {
        query: this.state.imgSearch,
      },
    })
      .then((res2) => this.setState({ imgSrc: res2.data.photos }))
      .catch((err2) => console.log(err2));

      Axios.get(cocktailUrl, cocktailKey)
        .then(res3 => this.setState({cocktails:res3.data.drinks}))
        .catch(err3 => console.log(err3))    
    
  };

  render() {
    console.log(this.state)
    return (
      
      <div>
        
        <Header />

        <Switch>
          <Route
            exact
            path="/Beer-Look-Up"
            render={(props) => (
              <Beers {...props} beers = {this.state.allBeers}/>
            )}
          />
          <Route
            exact
            path="/Cocktail-Recipes"
            render={(props) => (
              <Cocktails {...props} cocktails = {this.state.cocktails}/>
            )}
          />
        </Switch>
        {/* <Gallery
        gallery = {this.state.imgSrc}
      /> */}
      </div>
    );
  }
}
export default App;
