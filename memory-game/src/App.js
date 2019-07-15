import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper/";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Images from "./components/Images/";
import Footer from "./components/Footer";

class App extends Component {
  // State which holds current score and high score
  state = {
    curScore: 0,
    highScore: 0,
    images: [
      {
        clicked: false,
        id: 0,
        url: "https://via.placeholder.com/200/CD00FF/CD00FF"
      },
      {
        clicked: false,
        id: 1,
        url: "https://via.placeholder.com/200/FF0000/FF0000"
      },
      {
        clicked: false,
        id: 2,
        url: "https://via.placeholder.com/200/FFFF00/FFFF00"
      },
      {
        clicked: false,
        id: 3,
        url: "https://via.placeholder.com/200/0000FF/0000FF"
      },
      {
        clicked: false,
        id: 4,
        url: "https://via.placeholder.com/200/00FFFF/00FFFF"
      },
      {
        clicked: false,
        id: 5,
        url: "https://via.placeholder.com/200/000000/000000"
      },
      {
        clicked: false,
        id: 6,
        url: "https://via.placeholder.com/200/00FF1A/00FF1A"
      },
      {
        clicked: false,
        id: 6,
        url: "https://via.placeholder.com/200/FF9A00/FF9A00"
      }
    ],
    message: "Click an Image to Begin"
  };

  shuffleImages = (images) => {
    images.sort(() => Math.random() - 0.5);
  }

  handleGameEnd(curScore, highScore, images) {
    let newHighScore = highScore;
    if (curScore > highScore) {
      newHighScore = curScore;
    }
    images.forEach(image => image.clicked = false);
    this.setState({
      curScore: 0,
      highScore: newHighScore,
      images: images,
      message: "You guessed incorrectly!"
    });
  }

  handleImageClick = (id) => {
    let { curScore, highScore, images } = this.state;
    for (let i = 0; i < images.length; i++) {
      // find the correct image and check if it has been clicked
      if (images[i].id === id) {
        console.log(images[i]);
        if (images[i].clicked) {
          // if it has, the game ends
          this.handleGameEnd(curScore, highScore, images);
        } else {
          // otherwise, set this images clicked property to true and update the score
          images[i].clicked = true;
          this.setState({
            curScore: curScore + 1,
            highScore: highScore,
            images: images,
            message: "You guessed correctly!"
          });
        }
      }
    }

    // After figuring out right or wrong, shuffle images
    this.shuffleImages(images);

  }

  render() {
    return (
      <body>
        <Navbar
          curScore={this.state.curScore}
          highScore={this.state.highScore}
          message={this.state.message} />
        <Wrapper>
          <Jumbotron />
          <Images
            handleImageClick={this.handleImageClick}
            images={this.state.images} />
          <Footer />
        </Wrapper>
      </body>
    );
  }
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
