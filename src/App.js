import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Movie from './Components/movie-component';

class App extends Component {
  constructor(){
    super();
    this.state={
      show:false,
      movieName:''
    };
  }
  
 SearchMovie= (e) =>{
    this.setState(state=>({show:true}));
    //this.setState(state=>({movieName:e.target.value}));
    //this.setState(state=>({movieName:e.target.value,show:true}));
    console.log(this.state.movieName);
  }

  textChange = (e) =>{
    this.setState(state=>({movieName:e.target.value,show:false}));
  }
  render(){
    return (
      <div className="App">
        
          <h1>
           IMDB
          </h1>
          <input type="search" id="txtSearch" className="App-button" onChange={this.textChange} placeholder="Search movie by name"></input>
          <br/>
          <br/>
          <button className="App-button" onClick={this.SearchMovie} >Search</button>
        {this.state.show?<Movie movieName={this.state.movieName}/>:null}
      </div>
    );
  }
}

export default App;
