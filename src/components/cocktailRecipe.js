import React, { Component } from 'react';
import Axios from "axios"

let cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
let cocktailKey = "1";

class CocktailRecipe extends Component {
  state = {
      drinkName : ' ',
      drinkRecipe : {}
  }

    componentDidMount = () => {
        Axios.get(cocktailUrl + "s=" + this.props.match.params.id, cocktailKey)
      .then((res3) => console.log(res3.data.drinks[0]))
      .catch((err3) => console.log(err3));
    }
  
    render() {
        
        return (
            <div>
                
            </div>
        );
    }
}

export default CocktailRecipe;