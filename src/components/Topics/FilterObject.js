import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor(){
        super();

        this.state={
            unFilteredArray: [
                {
                    name: 'Jennifer',
                    age: 34
                }, 

                {
                    nickName: 'Monica',
                    age: 28
                }, 

                {
                    name: 'Brad',
                    yearsOld: 40
                }
            ],
            
            userInput: '',
            filteredArray: [],
    
        }
    }
    handleChange(val){
        this.setState({
            userInput: val 
        });
    }
    filtersTheArray(prop){
        var unFilteredArray= this.state.unFilteredArray;
        var filteredArray= [];
        for(var i= 0; i< unFilteredArray.length; i++){
            if(unFilteredArray[i][prop]){
              filteredArray.push(unFilteredArray[i]);
            }
          }
          this.setState({ filteredArray: filteredArray });
      }
  

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ 
                    () => this.filtersTheArray(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}


//if Obj[key] doesn't exist remove Obj
//Display new array of Objects that do have given property