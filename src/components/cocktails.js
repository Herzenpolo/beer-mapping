import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import Axios from "axios";
import { Link } from "react-router-dom";

let cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
let cocktailKey = "1";

class Cocktails extends Component {
  state = {
    cocktails: [],
    cocktailQuery: "",
  };

componentDidMount = () => {
  Axios.get(cocktailUrl + "f=a", cocktailKey)
      .then((res3) => this.setState({ cocktails: res3.data.drinks }))
      .catch((err3) => console.log(err3));
}


  displayCocktail = () => {
    if(this.state.cocktails !== null){
    let cocktails = [...this.state.cocktails];
    return cocktails.map((eachCocktail) => {
      return (
        <ListGroup key={eachCocktail.strDrink}>
          <ListGroupItem>
            <Link
              className="cocktail-list"
              to={`/Cocktail-Recipes/${eachCocktail.strDrink}`}
            >
              <img
                className="cocktailThumb"
                src={eachCocktail.strDrinkThumb}
                alt={eachCocktail.strDrink}
              />
              <br />
              {eachCocktail.strDrink}
            </Link>
          </ListGroupItem>
        </ListGroup>
      );
    });
  } else {
    alert ('no cocktails starting with this letter, select another')
  }
  };


  clickMethod = (e) => {
    Axios.get(cocktailUrl + "f=" + e.target.value, cocktailKey)
      .then((res3) => this.setState({ cocktails: res3.data.drinks }))
      .catch((err3) => console.log(err3));
  };

  cocktailSearchNew = (e) => {
    e.preventDefault();
    Axios.get(cocktailUrl + "s=" + this.state.cocktailQuery, cocktailKey)
      .then((res3) => this.setState({ cocktails: res3.data.drinks }))
      .catch((err3) => console.log(err3));
  };

  onChangeMethod = (e) => {
    let cocktail = e.target.value;
    this.setState({ cocktailQuery: cocktail });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <section className="letter-selector">
          <form onSubmit={this.cocktailSearchNew}>
            <input
              className="recipeSearch"
              type="text"
              placeholder="Search Cocktails!"
              onChange={(e) => this.onChangeMethod(e)}
            ></input>
            <input className = "submit-btn" type="submit" value='search!'></input>
          </form>
        </section>
        <section className="letter-selector">
          <button className = "letter-selector-btn" value="A" onClick={(e) => this.clickMethod(e)}>
            A
          </button>
          <button className = "letter-selector-btn" value="B" onClick={(e) => this.clickMethod(e)}>
            B
          </button>
          <button className = "letter-selector-btn" value="C" onClick={(e) => this.clickMethod(e)}>
            C
          </button>
          <button className = "letter-selector-btn" value="D" onClick={(e) => this.clickMethod(e)}>
            D
          </button>
          <button className = "letter-selector-btn" value="E" onClick={(e) => this.clickMethod(e)}>
            E
          </button>
          <button className = "letter-selector-btn" value="F" onClick={(e) => this.clickMethod(e)}>
            F
          </button>
          <button className = "letter-selector-btn" value="G" onClick={(e) => this.clickMethod(e)}>
            G
          </button>
          <button className = "letter-selector-btn" value="H" onClick={(e) => this.clickMethod(e)}>
            H
          </button>
          <button className = "letter-selector-btn" value="I" onClick={(e) => this.clickMethod(e)}>
            I
          </button>
          <button className = "letter-selector-btn" value="J" onClick={(e) => this.clickMethod(e)}>
            J
          </button>
          <button className = "letter-selector-btn" value="K" onClick={(e) => this.clickMethod(e)}>
            K
          </button>
          <button className = "letter-selector-btn" value="L" onClick={(e) => this.clickMethod(e)}>
            L
          </button>
          <button className = "letter-selector-btn" value="M" onClick={(e) => this.clickMethod(e)}>
            M
          </button>
          <button className = "letter-selector-btn" value="N" onClick={(e) => this.clickMethod(e)}>
            N
          </button>
        </section>
        <section className="letter-selector">
          <button className = "letter-selector-btn" value="O" onClick={(e) => this.clickMethod(e)}>
            O
          </button>
          <button className = "letter-selector-btn" value="P" onClick={(e) => this.clickMethod(e)}>
            P
          </button>
          <button className = "letter-selector-btn" value="Q" onClick={(e) => this.clickMethod(e)}>
            Q
          </button>
          <button className = "letter-selector-btn" value="R" onClick={(e) => this.clickMethod(e)}>
            R
          </button>
          <button className = "letter-selector-btn" value="S" onClick={(e) => this.clickMethod(e)}>
            S
          </button>
          <button className = "letter-selector-btn" value="T" onClick={(e) => this.clickMethod(e)}>
            T
          </button>
          <button className = "letter-selector-btn" value="U" onClick={(e) => this.clickMethod(e)}>
            U
          </button>
          <button className = "letter-selector-btn" value="V" onClick={(e) => this.clickMethod(e)}>
            V
          </button>
          <button className = "letter-selector-btn" value="W" onClick={(e) => this.clickMethod(e)}>
            W
          </button>
          <button className = "letter-selector-btn" value="X" onClick={(e) => this.clickMethod(e)}>
            X
          </button>
          <button className = "letter-selector-btn" value="Y" onClick={(e) => this.clickMethod(e)}>
            Y
          </button>
          <button className = "letter-selector-btn" value="Z" onClick={(e) => this.clickMethod(e)}>
            Z
          </button>
        </section>
        {this.displayCocktail()}
      </div>
    );
  }
}

export default Cocktails;
