import React from "react";
import PropTypes from 'prop-types';

function MovieCard(props) {
    const {
        id, moviename, rating, realeasedate, image
    } = props;

    return (
        <>
            <div className="card shadow-sm">
            <img src={image} alt={moviename} style={{height: '275px'}}/>

            <div className="card-body">
              <p className="card-text"><b>{moviename}</b></p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">

                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-muted">{rating}</small>
                <small className="text-muted">{realeasedate}</small>
              </div>
            </div>
          </div>
        </>
    );
}

MovieCard.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
    moviename: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    realeasedate: PropTypes.string.isRequired
};

export default MovieCard;