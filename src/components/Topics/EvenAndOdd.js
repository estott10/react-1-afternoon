import React, { Component } from 'react';

export default class EvenAndOdds extends Component {
    constuctor(){
        super();

        this.state = {
            evenArray : [],
            oddArray: [],
            userInput: ''
          }
        
        }

        assignEvenAndOdds(userInput) {
            const arr = userInput.split(",");
            const nums= arr.map( (elem)=> elem = parseInt(elem));
            this.setState({
                    evenArray: nums.filter((elem) => elem % 2 === 0),
                    oddArray: nums.filter((elem) => elem % 2 != 0)
           
            })
        }

        handleChange() {
            this.state({ userInput: val });
        }

    render() {
        return(
            <div className= "puzzleBoxevenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => {this.assignEvenAndOdds(this.state.userINput) }}> Split </button>
                <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray) } </span>
                <span className="resultsBox">Odds: { JSON.stringify(this.state.oddArray) } </span>
            </div>
        )
    }
}


/* <b>The problem summary:</b> Given a string of numbers separated by commas, split the numbers into two different arrays. The first being an array of all the even numbers and the second being an array of all the odd numbers. */