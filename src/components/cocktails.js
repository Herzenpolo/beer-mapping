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

  displayCocktail = () => {
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
              className="cocktailSearch"
              type="text"
              placeholder="Search Cocktails!"
              onChange={(e) => this.onChangeMethod(e)}
            ></input>
            <input type="submit" />
          </form>
        </section>
        <section className="letter-selector">
          <button value="A" onClick={(e) => this.clickMethod(e)}>
            A
          </button>
          <button value="B" onClick={(e) => this.clickMethod(e)}>
            B
          </button>
          <button value="C" onClick={(e) => this.clickMethod(e)}>
            C
          </button>
          <button value="D" onClick={(e) => this.clickMethod(e)}>
            D
          </button>
          <button value="E" onClick={(e) => this.clickMethod(e)}>
            E
          </button>
          <button value="F" onClick={(e) => this.clickMethod(e)}>
            F
          </button>
          <button value="G" onClick={(e) => this.clickMethod(e)}>
            G
          </button>
          <button value="H" onClick={(e) => this.clickMethod(e)}>
            H
          </button>
          <button value="I" onClick={(e) => this.clickMethod(e)}>
            I
          </button>
          <button value="J" onClick={(e) => this.clickMethod(e)}>
            J
          </button>
          <button value="K" onClick={(e) => this.clickMethod(e)}>
            K
          </button>
          <button value="L" onClick={(e) => this.clickMethod(e)}>
            L
          </button>
          <button value="M" onClick={(e) => this.clickMethod(e)}>
            M
          </button>
          <button value="N" onClick={(e) => this.clickMethod(e)}>
            N
          </button>
        </section>
        <section className="letter-selector">
          <button value="O" onClick={(e) => this.clickMethod(e)}>
            O
          </button>
          <button value="P" onClick={(e) => this.clickMethod(e)}>
            P
          </button>
          <button value="Q" onClick={(e) => this.clickMethod(e)}>
            Q
          </button>
          <button value="R" onClick={(e) => this.clickMethod(e)}>
            R
          </button>
          <button value="S" onClick={(e) => this.clickMethod(e)}>
            S
          </button>
          <button value="T" onClick={(e) => this.clickMethod(e)}>
            T
          </button>
          <button value="U" onClick={(e) => this.clickMethod(e)}>
            U
          </button>
          <button value="V" onClick={(e) => this.clickMethod(e)}>
            V
          </button>
          <button value="W" onClick={(e) => this.clickMethod(e)}>
            W
          </button>
          <button value="X" onClick={(e) => this.clickMethod(e)}>
            X
          </button>
          <button value="Y" onClick={(e) => this.clickMethod(e)}>
            Y
          </button>
          <button value="Z" onClick={(e) => this.clickMethod(e)}>
            Z
          </button>
        </section>
        {this.displayCocktail()}
      </div>
    );
  }
}

export default Cocktails;
