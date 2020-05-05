import React, { Component } from "react";
import { UncontrolledCarousel } from "reactstrap";
import Axios from "axios";
import { Card, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

let pexelsUrl = "https://api.pexels.com/v1/search";
let pexelsKey = "563492ad6f917000010000011dba69a3f6f04f64934d141744e85366"; // sets the header picture/ pexels API

let cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"; // api to random drink
let cocktailKey = "1";

let emamKey = "822cb20fa26d9dc7add797be8364c7d7";
let emamAppId = "5ee788d0";

let beerUrl = 'https://api.punkapi.com/v2/beers/random'

class Home extends Component {
  state = {
    imgSearch: "barbecue",
    imgSrc: [],
    randoDrink: [],
    randoBeer: [],
    recipes: {},
    recipesLabel: "",
    recipeUrl: "",
  };

  componentDidMount = () => {
    Axios.get(pexelsUrl, {
      headers: {
        Authorization: pexelsKey,
      },
      params: {
        query: this.state.imgSearch,
      },
    })
      .then((res2) => this.displayPictures(res2))
      .catch((err2) => console.log(err2));

    Axios.get(cocktailUrl, cocktailKey)
      .then((res3) => this.setState({ randoDrink: res3.data.drinks[0] }))
      .catch((err3) => console.log(err3));


    Axios.get(
      `https://api.edamam.com/search?q=beef&app_id=${emamAppId}&app_key=${emamKey}&from=0&to=100`
      // q: this.state.q,
      // app_id: emamAppId,
      // app_key: emamKey,
    )
      .then((res) =>
        this.setState({
          recipes: res.data.hits[Math.floor(Math.random() * 100)].recipe,
          recipesLabel:
            res.data.hits[Math.floor(Math.random() * 100)].recipe.label,
          recipeUrl: res.data.hits[Math.floor(Math.random() * 100)].recipe.url,
        })
      )
      .catch((err) => console.log(err));

      Axios.get(beerUrl)
      .then((res4) => this.setState({randoBeer:res4.data[0]}))
      .catch((err4) => console.log(err4))
      

  };

  displayPictures = (res) => {
    let pictures = res.data.photos.map((eachPhoto) => {
      return {
        src: eachPhoto.src.landscape,
        altText: this.state.imgSearch,
        header: eachPhoto.photographer,
      };
    });
    this.setState({ imgSrc: pictures });
  };

  onClickCocktail = (e) => {
    console.log(e.target); 
    return (
      <Link to={`/Cocktail-Recipes/${this.state.randoDrink.strDrink}`}></Link>
    )
  };
  


  render() {
    console.log(this.state)
    return (
      <div>
        <UncontrolledCarousel items={this.state.imgSrc} />
        <h5 className="item-of-the-day">Beer of the day</h5>
        <Card body className="text-center homeCard">
          <CardTitle className = "item-of-the-day-name" >{this.state.randoBeer.name}</CardTitle>
         
            <Link
              className="RandoHome dailyBtn"
              to={`/beer/${this.state.randoBeer.name}`}
            >
              {" "}
              Crack Open!{" "}
            </Link>
          
        </Card>
        <h5 className="item-of-the-day">Drink of the day</h5>
        <Card body className="text-center homeCard">
          <CardTitle className = "item-of-the-day-name">{this.state.randoDrink.strDrink}</CardTitle>
          
            <Link
              className="RandoHome dailyBtn"
              to={`/Cocktail-Recipes/${this.state.randoDrink.strDrink}`}
            >
              {" "}
              Recipe!{" "}
            </Link>
          
        </Card>
        <h5 className="item-of-the-day">Recipe of the day</h5>
        <Card body className="text-center homeCard">
          <CardTitle className = "item-of-the-day-name"> {this.state.recipesLabel} </CardTitle>
         
            {" "}
            <a className="RandoHome dailyBtn" href={this.state.recipeUrl}>
              Recipe!
            </a>
          
        </Card>
      </div>
    );
  }
}

export default Home;


