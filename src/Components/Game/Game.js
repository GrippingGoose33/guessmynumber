import React, { Component } from 'react';
import './Game.css';

class Game extends Component {
    constructor(){
        super()
        this.state = {
            number: "",
            message: "",
            range: 0,
            random: generateRandomNumber(100)
        }
    }

    handleonChange = e=>{

        const{target: {value}} = e;

        console.log(value);

            if (value.trim() > 0){
               this.setState( {
                    number: value
                })
           } 
       }
    }


    handleonClick = ()=>{
        const number = parseIn(this.state.number);
        const random = parseIn(this.state.random);

        const text = calculateText(number, random);
        
        this.setState({
            message: text
        })
    }

    render() {
        return (
            <div className='Game'>
                <input
                    type = "numbers"
                    value = {this.state.number}
                    onChange = {this.handleonChange}
                />
                <button onClick={this.handleonClick}>Alabare</button>
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default Game;

function generateRandomNumber(max, min=1){
    return Math.floor(Math.random() * (max - min) + min);
}

function calculateText(number, random){
    if (number === random){
        return "Felicidades lo lograste"
    }
}