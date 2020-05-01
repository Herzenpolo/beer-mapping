import React, { Component } from "react";
import { UncontrolledCarousel } from "reactstrap";
import Axios from "axios";
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const items = [
  {
    src:
      "https://images.pexels.com/photos/1105325/bbq-meet-eating-diner-1105325.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    altText: "Image 1",
    caption: "Burgers on Barbecue",
    header: "Burgers",
    key: "1",
  },
  {
    src:
      "https://images.pexels.com/photos/3641761/pexels-photo-3641761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    altText: "Slide 2",
    caption: "Smoked Brisket",
    header: "Brisket",
    key: "2",
  },
  {
    src:
      "https://images.pexels.com/photos/1267289/pexels-photo-1267289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    altText: "Slide 3",
    caption: "Veza Sur Flight",
    header: "Veza Sur",
    key: "3",
  },
];

let pexelsUrl = "https://api.pexels.com/v1/search";
let pexelsKey = "563492ad6f917000010000011dba69a3f6f04f64934d141744e85366";

class Home extends Component {
  state = {
    imgSearch: "Steak",
    imgSrc: [],
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

  render() {
    console.log(this.state);
    return (
      <div>
        <UncontrolledCarousel items={this.state.imgSrc} />
        <h5 className = "item-of-the-day">Beer of the day</h5>
        <Card body className = 'homeCard'>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button className = "dailyBtn">Go somewhere</Button>
        </Card>
        <h5 className = "item-of-the-day">Cocktail of the day</h5>
        <Card body className="text-center homeCard">
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button className = "dailyBtn">Go somewhere</Button>
        </Card>
        <h5 className = "item-of-the-day">Recipe of the day</h5>
        <Card body className="text-right homeCard">
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button className = "dailyBtn">Go somewhere</Button>
        </Card>
      </div>
    );
  }
}

export default Home;
