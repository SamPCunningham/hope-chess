import React, { Component } from "react";
import "./App.css";
import Game from './components/game.js'

class App extends Component {
    constructor(props) {
        super(props);
      }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Please Enjoy This Chess Game</h1>
                </header>
                <br />
                <Game />
            </div>
        );
    }
}

export default App;