import React from 'react';

const MovieCard = (props) => {
    
    const movie = props.movie;

    return (
        <>
            <div className="card">
                <img 
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                    alt={movie.title + ' poster'}
                    className="card--image"
                />
                <div className="card--content">
                    <h3 className="card--title">{movie.original_title}</h3>
                    <p><small>RELEASE DATE: {movie.release_date}</small></p>
                    <p><small>RATING: {movie.vote_average}</small></p>
                    <p className="card--desc">{movie.overview}</p>
                </div>
            </div>
        </>
    );
}

export default MovieCard;