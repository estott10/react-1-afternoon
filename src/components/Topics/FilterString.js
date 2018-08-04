import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor(){
        super();

        this.state= {
            unFilteredArray: [ "Erika", "Blake", "Christopher", "Keith" ],
            userInput: '',
            filteredArray: []
        };
    }
    handleChange(val){
        this.setState({userInput: val});
    }
    createsNewArray(userInput){
            // const miniArrays= [];
        var unFilteredArray= this.state.unFilteredArray;
        const filteredArray= [];
        
        for(var i=0; i < unFilteredArray.length; i++){
            if(unFilteredArray[i].includes(userInput)){
                filteredArray.push(unFilteredArray[i]);
                }
            }
            this.setState({filteredArray: filteredArray});
        }
    


    render(){
        return(
           <div className="puzzleBox filterStringPB">
               <h4>Filter String</h4>
               <span className="puzzleText">Unfiltered: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
               <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
               <button className="confirmationButton" onClick={ () => this.createsNewArray(this.state.userInput)}>Filter</button>
               <span className="resultsBox filterStringRB"> Filtered:{JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}


//Using array of strings... ['', '', '', ''] filter out strings that contain a given string. 
//Display a new array with strings that DO contain the given string
//split array into multiple arrays.... split smaller arrays ... if smaller array contains input string then keep array.