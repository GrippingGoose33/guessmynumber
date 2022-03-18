import React, { Component } from 'react';
import './Game.css';

class Game extends Component {
    constructor(){
        super()
        this.state = {
            number: 0,
            message: "",
            range: 0,
            random: generateRandomNumber(100)
        }
    }

    render() {
        return (
            <div className='Game'>
                <input
                    type="numbers"


                />
                <button>Alabare</button>
                <p>Bottom Text</p>
            </div>
        );
    }
}

export default Game;

function generateRandomNumber(max, min-1){
    return Math.floor(Math.random() * (max - min) + min);
}