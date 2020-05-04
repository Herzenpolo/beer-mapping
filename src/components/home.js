import React, { Component } from "react";
import { UncontrolledCarousel } from "reactstrap";
import Axios from "axios";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";

let pexelsUrl = "https://api.pexels.com/v1/search";
let pexelsKey = "563492ad6f917000010000011dba69a3f6f04f64934d141744e85366"; // sets the header picture/ pexels API

let cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"; // api to random drink
let cocktailKey = "1";

let emamKey = "822cb20fa26d9dc7add797be8364c7d7";
let emamAppId = "5ee788d0";

class Home extends Component {
  state = {
    imgSearch: "Steak",
    imgSrc: [],
    randoDrink: [],
    randoBeer: {},
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

      // this.setState({randoBeer : this.props.beersArr[Math.floor(Math.random()*this.props.beersArr.length)]})
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
  };
  

  

  render() {
    console.log(this.props.beersArr[Math.floor(Math.random()*this.props.beersArr.length)])
    return (
      <div>
        <UncontrolledCarousel items={this.state.imgSrc} />
        <h5 className="item-of-the-day">Beer of the day</h5>
       
        <h5 className="item-of-the-day">Cocktail of the day</h5>
        <Card body className="text-center homeCard">
          <CardTitle>{this.state.randoDrink.strDrink}</CardTitle>
          <Button className="dailyBtn">
            <Link
              className="RandoHome"
              to={`/Cocktail-Recipes/${this.state.randoDrink.strDrink}`}
            >
              {" "}
              Recipe!{" "}
            </Link>
          </Button>
        </Card>
        <h5 className="item-of-the-day">Recipe of the day</h5>
        <Card body className="text-center homeCard">
          <CardTitle> {this.state.recipesLabel} </CardTitle>
          <Button className="dailyBtn">
            {" "}
            <a className="RandoHome" href={this.state.recipeUrl}>
              Recipe!
            </a>
          </Button>
        </Card>
      </div>
    );
  }
}

export default Home;
