import React, { Component } from 'react';
import './App.css';
import Axios from 'axios'
import Breweries from './components/breweries'
import Gallery from './components/gallery'
import Header from './components/header'
import {Switch, Route} from 'react-router-dom'




let yelpUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search"
let yelpKey = ``

let pexelsUrl = "https://api.pexels.com/v1/search"
let pexelsKey = ""


class App extends Component {
state = {
  allBreweries : [],
  allCities: [],
  locationCity: 'Miami',
  locationState: 'Florida',
  imgSrc: [],
  imgSearch: 'Cold beer'
}  

componentDidMount = () => {
  

  Axios.get(yelpUrl, {
    headers: {
      Authorization: yelpKey
    },
    params: {
      // limit: 50,
      categories: `bars`,
      location: {
        city: this.state.locationCity,
        country: "US",
        address2: "",
        address3: "",
        state: this.state.locationState,
        address1: "",
        zip_code: ""
    }
  
  }

  })
  .then(res=> this.setState({allBreweries:res.data}))
  .catch(err => console.log(err))

  Axios.get(pexelsUrl, {
    headers: {
      Authorization: pexelsKey
    }, 
    params: {
      query: this.state.imgSearch
    }
  })
  .then(res2 => this.setState({imgSrc:res2.data}))
  .catch(err2 => console.log(err2))

}

render(){
  
  return (
    <div>
      <Header/>
      <Breweries
        breweries = {this.state.allBreweries}
      />
      <Gallery
        Gallery = {this.state.imgSrc}
      />
    </div>
  );
  }
  }
export default App;
