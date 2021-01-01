import React, { Component } from 'react';
import '../App.css';
//http://www.omdbapi.com/?i=tt3896198&apikey=2128c072&t=movieName
/*
export const Movie = (props) => (
    <div>
    <img src={props.Poster} alt={props.Title} />
    <h1>{props.Title}</h1>
    <h4>Actor : {props.Actors}</h4>
    <h4>Production : {props.Production}</h4>
    <h4>Director : {props.Director}</h4>
    <h4>IMDB Rating : {props.imdbRating}</h4>
    <p>
    {props.Plot}
    </p>
</div>
);
*/

class Movie extends React.Component {
    constructor(){
        super();
        this.state={
            movieData: ''
          }

    }
    async componentDidMount(){
        /*fetch('http://www.omdbapi.com/?i=tt3896198&apikey=2128c072&t='+this.props.movieName)
        .then(response => console.log(response.json()))
        .then(result => {
            this.setState({movieData: console.log(result)})
        })

        console.log(this.state.movieData);*/
        
       
       const url = 'https://www.omdbapi.com/?i=tt3896198&apikey=2128c072&plot=full&t='+this.props.movieName;
       const response = await fetch(url);
       const data = await response.json();
       this.setState({movieData:data});
       console.log(this.state.movieData);
       
      /*fetch(url)
      .then(response=>response.json())
       .then(data=>{
         this.setState({
             movieData : data
         })

       });
       console.log(this.state.movieData);*/
     
      }
    
    render(){
        const {movieData} = this.state;
        return(
            <div>
                <img src={movieData.Poster} alt={movieData.Title} />
                <h1>{movieData.Title}</h1>
                <h4>Actor : {movieData.Actors}</h4>
                <h4>Production : {movieData.Production}</h4>
                <h4>Director : {movieData.Director}</h4>
                <h4>IMDB Rating : {movieData.imdbRating}</h4>
                <p>
                {movieData.Plot}
                </p>
            </div>
        );
    }
}

export default Movie;
