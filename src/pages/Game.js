import React, { Component } from "react";
import Nav from "../components/NavBar";
import Jumbotron from "../components/Jumbotron";
import { Row, Container } from "../components/Grid";
import Card from "../components/Card";
import images from "../images/image.json";
import Footer from "../components/Footer";

export class Game extends Component {
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

  /** This method will update the initial state if the user guess the wrong image */
  guessWrongSetState = () => {
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
  };

  /** This method will update the initial state if the user guess the right image */
  guessRightSetState = newImageArray => {
    this.setState({
      score: this.state.score + 1,
      images,
      unguessedImages: newImageArray,
      message: "Your Guess is Right!"
    });
  };

  /** This method will check if the user guess is right or wrong */
  guessImage = id => {
    const findImage = this.state.unguessedImages.find(image => image.id === id);

    console.log("image", findImage);
    if (findImage === undefined) {
      this.guessWrongSetState();
    } else {
      const newImageArray = this.state.unguessedImages.filter(
        image => image.id !== id
      );
      this.guessRightSetState(newImageArray);
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

export default Game;
