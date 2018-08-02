import React, { Component } from 'react';

export default class EvenAndOdds extends Component {
    constuctor(){
        this.state = {
            evenArray : [],
            oddArray: [],
            userInput: "",
          }
        
        onChange(){
            this.setState(){
                this.userInput: 
            }
            
        }
    }

    render() {
        return(
            <div className= "puzzleBoxevenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange= ".onChange()" ></input>
                <button className="confirmationButton"></button>
                <span className="resultsBox"></span>
                <span className="resultsBox"></span>
            </div>
        )
    }
}


/* <b>The problem summary:</b> Given a string of numbers separated by commas, split the numbers into two different arrays. The first being an array of all the even numbers and the second being an array of all the odd numbers. */