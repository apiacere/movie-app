import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component {

  state = {
    movies: [
      {
        title: "Matrix",
        poster: "https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/03/matrix_reboot_1000-630x400-1.jpg"
      },
      {
        title: "Full Metal Jacket",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg"
      },
      {
        title: "Oldboy",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
      },
      {
        title: "Star Wars",
        poster: "http://michiganjournal.org/wp-content/uploads/2017/11/Star-Wars.jpg"
      }
    ]
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Trainspotting",
            poster: "https://resizing.flixster.com/Ih73l_aXpJpaD7xVFdK6nad3Efc=/206x305/v1.bTsxMTE3NjEwNztqOzE3OTA0OzEyMDA7ODAwOzEyMDA"
          },
          ...this.state.movies
        ]
      })
    }, 2000)
  }

  render() {
    return (
      <div className="App">
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}></Movie>
        })}
      </div>
    );
  }
}

export default App;
