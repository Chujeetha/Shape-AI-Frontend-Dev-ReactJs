import React, {Component} from 'react';
import './App.css';
import {Box} from './components/Box';
import {Value} from './components/Value';
import {Clbutton} from './components/Clbutton';
import * as math from 'mathjs';

class App extends Component{
  constructor(props){
    super(props);

    this.state={
      value1: ""
    };
  }

  addToInput = val =>{
     this.setState({value1: this.state.value1 + val});
  };

  handleEqual = () => {
    this.setState({value1: math.evaluate(this.state.value1)})
  };


  render(){
    return(
      <div className="App">
        <div className="calci">
        <Value value1={this.state.value1}></Value>
        <div className="button">
           <Box handleClick={this.addToInput}>7</Box>
           <Box handleClick={this.addToInput}>8</Box>
           <Box handleClick={this.addToInput}>9</Box>
           <Box handleClick={this.addToInput}>/</Box>
        </div>

        <div className="button">
           <Box handleClick={this.addToInput}>4</Box>
           <Box handleClick={this.addToInput}>5</Box>
           <Box handleClick={this.addToInput}>6</Box>
           <Box handleClick={this.addToInput}>*</Box>
        </div>

        <div className="button">
           <Box handleClick={this.addToInput}>1</Box>
           <Box handleClick={this.addToInput}>2</Box>
           <Box handleClick={this.addToInput}>3</Box>
           <Box handleClick={this.addToInput}>+</Box>
        </div>

        <div className="button">
           <Box handleClick={this.addToInput}>.</Box>
           <Box handleClick={this.addToInput}>0</Box>
           <Box handleClick={()=> this.handleEqual()}>=</Box>
           <Box handleClick={this.addToInput}>-</Box>
        </div>

        <div className="button">
           <Clbutton handleClear={() => this.setState({value1: ""})} >Clear</Clbutton>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
