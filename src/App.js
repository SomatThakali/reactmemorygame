import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Container from "./components/Container";
import Row from "./components/Row";
import images from "./image.json";

export class App extends Component {
  state = {
    // images
    images: [
      {
        id: 1,
        name: "Beth",
        image: "beth.png"
      },
      {
        id: 2,
        name: "Bird Person",
        image: "birdperson.png"
      },
      {
        id: 3,
        name: "Evil Morty",
        image: "evilmorty.png"
      },
      {
        id: 4,
        name: "Giant Head",
        image: "gianthead.png"
      }
    ]
  };
  render() {
    console.log(images[0].image);
    console.log(this.state.images[0].image);
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            {this.state.images.map(image => (
              <Card
                id={image.id}
                key={image.id}
                name={image.name}
                image={image.image}
              />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
