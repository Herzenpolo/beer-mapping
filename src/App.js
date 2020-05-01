import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
import Beers from "./components/beers";
import Gallery from "./components/gallery";
import Header from "./components/header";
import { Switch, Route } from "react-router-dom";
import Cocktails from "./components/cocktails";
import Recipes from "./components/recipes";
import Home from "./components/home";
import BeersDetails from "./components/BeersDetail";
import "./components/Kalos/Kalos.ttf";
import CocktailRecipe from "./components/cocktailRecipe";
import './components/blindmelon/BLINDMELON.TTF'

let punkUrl = "https://api.punkapi.com/v2/beers";

let pexelsUrl = "https://api.pexels.com/v1/search";
let pexelsKey = "563492ad6f917000010000011dba69a3f6f04f64934d141744e85366";

// let cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=ma'
// let cocktailKey = '1'

let emamUrl = "https://api.edamam.com/search";
let emamKey = "822cb20fa26d9dc7add797be8364c7d7";
let emamAppId = "5ee788d0";

class App extends Component {
  state = {
    allBeers: [],
    filteredBeers: [],
    imgSrc: [],
    imgSearch: "Barbecue",
    recipeQuery: "Brisket",
    recipes: [],
  };

  componentDidMount = () => {
    Axios.get(punkUrl, {
      params: {},
    })
      .then((res) =>
        this.setState({ allBeers: res.data, filteredBeers: res.data })
      )
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

    // Axios.get(cocktailUrl, cocktailKey)
    //   .then(res3 => this.setState({cocktails:res3.data.drinks}))
    //   .catch(err3 => console.log(err3))

    Axios.get(emamUrl, {
      params: {
        q: this.state.recipeQuery,
        app_id: emamAppId,
        app_key: emamKey,
      },
    })
      .then((res4) => this.setState({ recipes: res4.data }))
      .catch((err4) => console.log(err4));
  };

  beerSearch = (e) => {
    let beers = [...this.state.allBeers];
    let beersArr = beers.filter((eachBeer) => {
      return eachBeer.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    console.log(this.state.allBeers);
    this.setState({ filteredBeers: beersArr });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Header />

        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home {...props} beers={this.state.filteredBeers} gallery = {this.state.imgSrc}/>
            )}
          />
          <Route
            exact
            path="/Beer-Look-Up"
            render={(props) => (
              <Beers
                {...props}
                beers={this.state.filteredBeers}
                beerSearch={this.beerSearch}
              />
            )}
          />
          <Route
            exact
            path="/Beer/:id"
            render={(props) => (
              <BeersDetails
                {...props}
                beers={this.state.filteredBeers}
                beerSearch={this.beerSearch}
                emamUrl={this.emamUrl}
                emamAppId={this.emamAppId}
                emamKey={this.emamKey}
              />
            )}
          />
          <Route
            exact
            path="/Cocktail-Recipes"
            render={(props) => <Cocktails {...props} />}
          />
          <Route
            exact
            path="/Cocktail-Recipes/:id"
            render={(props) => <CocktailRecipe {...props} />}
          />
          <Route
            exact
            path="/recipes"
            render={(props) => (
              <Recipes
                {...props}
                recipeQuery={this.state.recipeQuery}
                recipes={this.state.recipes}
              />
            )}
          />
        </Switch>
        <iframe src="https://open.spotify.com/embed/playlist/2l7PzKhvRPBbCEcr9zf2S7?si=rvZ7d1EFRzGcAqk0b6QM4Q" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        {/* <Gallery
        gallery = {this.state.imgSrc}
      /> */}
      </div>
    );
  }
}
export default App;
