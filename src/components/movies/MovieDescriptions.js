import React from "react";
import { Modal } from "react-bootstrap";
import "./Movies.css";

class MovieDescriptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({
      show: true,
    });
  }

  hideModal() {
    this.setState({
      show: false,
    });
  }

  render() {
    const actors = this.props.movie.Actors;
    let actorList = actors.map((actor, index) => {
      return <li key={index}>{actor}</li>;
    });

    return (
      <div>
        <p className="movieLink" onClick={this.showModal}>
          {this.props.movie.Title}
        </p>
        <Modal
          show={this.state.show}
          dialogClassName={"infoModal"}
          size="lg"
          scrollable={true}
        >
          <Modal.Header>
            <h2>{this.props.movie.Title}</h2>
          </Modal.Header>
          <Modal.Body>
            <img
              src={this.props.poster.Url}
              alt={this.props.poster.Description}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/resources/images/film.placeholder.poster.jpg";
              }}
            />
            <h4>Description:</h4>
            <p>{this.props.movie.LongDescription}</p>
            <h4>Actors:</h4>
            <ul>{actorList}</ul>
            <h4>Rating:</h4>
            <p>{this.props.movie.Rating}</p>
            <h4>Genre:</h4>
            <p>{this.props.movie.GenrePrimary}</p>
            <h4>Duration:</h4>
            <p>{this.props.movie.Duration} minutes</p>
            <h4>Studio:</h4>
            <p>{this.props.movie.Studio}</p>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.hideModal}>Close</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default MovieDescriptions;
