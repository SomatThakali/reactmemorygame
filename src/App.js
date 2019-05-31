import React, { Component } from "react";
import Nav from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Footer from "./components/Footer";
import images from "./images/image.json";
import { Row, Container } from "./components/Grid";

export class App extends Component {
  state = {
    images,
    unguessedImages: images,
    score: 0,
    topScore: 0,
    message: "Click an image to begin!"
  };

  shuffleArray = array => {
    array.sort(() => Math.random() - 0.5);
  };

  guessImage = id => {
    const findImage = this.state.unguessedImages.find(image => image.id === id);

    console.log("image", findImage);
    if (findImage === undefined) {
      this.setState({
        topScore:
          this.state.score > this.state.topScore
            ? this.state.score
            : this.state.topScore,
        score: 0,
        images,
        unguessedImages: images,
        message: "Game Over. Your Guess is Wrong!"
      });
    } else {
      const newImageArray = this.state.unguessedImages.filter(
        image => image.id !== id
      );
      console.log("new Image Array", newImageArray);
      this.setState({
        score: this.state.score + 1,
        images,
        unguessedImages: newImageArray,
        message: "Your Guess is Right!"
      });
    }
    this.shuffleArray(images);
  };

  render() {
    return (
      <div>
        <Nav
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Jumbotron />
        <Container>
          <Row>
            {this.state.images.map(image => (
              <Card
                id={image.id}
                key={image.id}
                imageUrl={image.imageUrl}
                guessImage={this.guessImage}
              />
            ))}
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
