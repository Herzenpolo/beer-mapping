import React, { Component } from 'react';
import Axios from "axios"
import { Jumbotron, Container } from 'reactstrap';

let cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
let cocktailKey = "1";

class CocktailRecipe extends Component {
  state = {
      drinkName : ' ',
      drinkRecipe : {}
  }

    componentDidMount = () => {
        Axios.get(cocktailUrl + "s=" + this.props.match.params.id, cocktailKey)
      .then((res3) => this.setState({drinkRecipe:res3.data.drinks[0], drinkName:res3.data.drinks[0].strDrink}))
      .catch((err3) => console.log(err3));
    }

getIngredients = () => {
  let ingredients = []
  for (let key in this.state.drinkRecipe){
    if(key.includes('strIngredient')) {
      if(this.state.drinkRecipe[key]){
        console.log(key, this.state.drinkRecipe[key])
        ingredients.push(<h4 className = "drink-ingredients">{this.state.drinkRecipe[key]}</h4>)
      }
    }
  }
  return ingredients
}

getInstructions = () => {
  let instructions = this.state.drinkRecipe.strInstructions
  return (
    <p className = "drink-instructions">{instructions}</p>
  )
}

getImage = () => {
  let image = this.state.drinkRecipe.strDrinkThumb
  return <img src = {image} alt = {this.state.drinkName} className = "drink-img"/>
}
  
    render() {
        
        return (
          <div>
          <Jumbotron fluid>
            <Container className = "drinkTitle" fluid>
              <h1 className="display-3">{this.state.drinkName}</h1>
            </Container>
          </Jumbotron>

          <section className = "drinkRecipe">
            {this.getImage()}
            {this.getIngredients()}
            {this.getInstructions()}
          </section>

        </div>
        );
    }
}

export default CocktailRecipe;