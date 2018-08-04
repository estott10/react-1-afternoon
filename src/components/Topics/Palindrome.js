import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor(){
    super();

    this.state= {
        userInput: "",
        palindrome: "",
        };
    }

    handleChange(val){
        this.setState({ userInput: val})
    };

    checkIfPalindrome(userInput){
        var palindrome= this.state.palindrome;
        const splitInput= input.split("");
        if(splitInput === splitInput.reverse()){
            palindrome= "true";
        }
        else{
            palindrome= "false";
        }
           this.setState{
            palindrome= palindrome;
        };
    }



    render(){
        return(
            <div className="puzzleBox filterStringPB"> 
                <h4>Palindrome</h4>
                <input className="inputLine" onChange= {(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick= {() => this.checkIfPalindrome(this.state.userInput)} > Check </button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}


//Is the string spelled the same backwards and forwards?  loop forward and do nested loop backwards... compare each element