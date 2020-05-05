import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
import Beers from "./components/beers";
import Header from "./components/header";
import { Switch, Route } from "react-router-dom";
import Cocktails from "./components/cocktails";
import Recipes from "./components/recipes";
import Home from "./components/home";
import BeersDetails from "./components/BeersDetail";
import "./components/Kalos/Kalos.ttf";
import CocktailRecipe from "./components/cocktailRecipe";
import "./components/blindmelon/BLINDMELON.TTF";

let punkUrl = "https://api.punkapi.com/v2/beers";

// let pexelsUrl = "https://api.pexels.com/v1/search";
// let pexelsKey = "563492ad6f917000010000011dba69a3f6f04f64934d141744e85366";

// let cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=ma'
// let cocktailKey = '1'

// let emamUrl = "https://api.edamam.com/search";
// let emamKey = "822cb20fa26d9dc7add797be8364c7d7";
// let emamAppId = "5ee788d0";

class App extends Component {
  state = {
    allBeers: [],
    filteredBeers: [],
    imgSrc: [],
    imgSearch: "Brewery",
    recipeQuery: "Brisket",
    recipes: [],
    randomBeer: [],
  };

  componentDidMount = () => {
    // Axios.get(`https://ironrest.herokuapp.com/bubblesnsalt`)
    // .then((res)=> this.setState({allBeers:res.data, filteredBeers:res.data}))
    // .catch((err) => console.log(err))

    
    Axios.get(punkUrl, {
      params: {
        per_page: 80,
      },
    })
      .then((res) =>
        this.setState({ allBeers: res.data, filteredBeers: res.data })
      )
      .catch((err) => console.log(err));

    // Axios.get(pexelsUrl, {
    //   headers: {
    //     Authorization: pexelsKey,
    //   },
    //   params: {
    //     query: this.state.imgSearch,
    //   },
    // })
    //   .then((res2) => this.setState({ imgSrc: res2.data.photos }))
    //   .catch((err2) => console.log(err2));

    // Axios.get(cocktailUrl, cocktailKey)
    //   .then(res3 => this.setState({cocktails:res3.data.drinks}))
    //   .catch(err3 => console.log(err3))

    // Axios.get(emamUrl, {
    //   params: {
    //     q: this.state.recipeQuery,
    //     app_id: emamAppId,
    //     app_key: emamKey,
    //     },
    //   })
    //     .then((res4) => this.setState({ recipes: res4.data }))
    //     .catch((err4) => console.log(err4));
  };

  beerSearch = (e) => {
    let beers = [...this.state.allBeers];
    let beersArr = beers.filter((eachBeer) => {
      return eachBeer.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    console.log(this.state.allBeers);
    this.setState({ filteredBeers: beersArr });
  };

  beerSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    let newBeer = {
      name: e.target.name.value,
      abv: e.target.abv.value,
      tagline: e.target.tagline.value,
      food_pairing: [e.target.food_pairing.value],
    };
    console.log(newBeer);
    let newBeerArr = [...this.state.beersArr];
    newBeerArr.push(newBeerArr);
    this.setState({ allBeers: newBeerArr });
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
              <Home
                {...props}
                beers={this.state.filteredBeers}
                gallery={this.state.imgSrc}
                beersArr={this.state.allBeers}
              />
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
                beerSubmit={this.beerSubmit}
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
      </div>
    );
  }
}
export default App;

// Axios.get(punkUrl, {
//   params: {
//     page: 2,
//     per_page: 80,
//   },
// }).then((res) => {
//   res.data.map((eachBeer) =>
//     Axios.post("https://ironrest.herokuapp.com/bubblesnsalt", {
//       name: eachBeer.name,
//       abv: eachBeer.abv,
//       description: eachBeer.description,
//       foodPairing: eachBeer.food_pairing[0],
//     })
//   );
// });

// Axios.post("https://ironrest.herokuapp.com/bubblesnsalt",{name:'Corona'})
// .then((res) => console.log(res))

// Axios.get("https://ironrest.herokuapp.com/bubblesnsalt")
// .then((res) => console.log(res))

// Axios.delete("https://ironrest.herokuapp.com/deleteCollection/bubblesnsalt")
