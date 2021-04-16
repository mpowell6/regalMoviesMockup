import React from "react";
import { Card } from "react-bootstrap";
import MovieDescriptions from "./MovieDescriptions";
import "./Movies.css";

class MovieEntry extends React.Component {
  render() {
    return (
      <Card className={this.props.entryKey}>
          <img
            src={this.props.poster.Url}
            alt={this.props.poster.Description}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/resources/images/film.placeholder.poster.jpg";
            }}
          />
        <MovieDescriptions movie={this.props.movie} poster={this.props.poster} />
      </Card>
    );
  }
}

export default MovieEntry;
