import React from "react";
import MovieEntry from "./MovieEntry";
import { Container } from "react-bootstrap";
import "./Movies.css";

const movieList = require("../../resources/nowPlaying.json");

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numMovies: 10,
      hidden: false
    };
    this.handleLoadMoreClick = this.handleLoadMoreClick.bind(this);
  }

  handleLoadMoreClick() {
    this.setState({
      numMovies: movieList.MovieFeedEntries.length,
      hidden: true
    });
  }

  render() {
    const showButton = this.state.hidden;
    let button;
    if (!showButton){
      button = <button onClick={this.handleLoadMoreClick}>Load More</button>
    } else {
      button = <strong>Check back later for new titles!</strong>
    }

    return (
      <div className="Movies">
        <Container className="moviesContainer" fluid>
          {movieList.MovieFeedEntries.map((entry, key) => {
            if (key < this.state.numMovies) {
              return (
                <MovieEntry
                  key={key}
                  movie={entry.Movie}
                  poster={entry.Movie.Media.find(
                    (poster) => poster.SubType === "TV_SmallPosterImage"
                  )}
                />
              );
            }
            return null
          }
          )}
        </Container>
        <div className="loadMore">
          {button}
        </div>
      </div>
    );
  }
}

export default Movies;
