import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.scss';

function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <MoviePoster title={title} poster={poster} />
            </div>
            <div className="movie-text">
                <h1>{title}</h1>
                <p className="movie-genre">{genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}</p>
                <LinesEllipsis className="movie-synopsis"
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                />
            </div>
        </div>
    )
}

function MoviePoster({title, poster}) {
    return (
        <img src={poster} alt={title} />
    )
}

function MovieGenre({genre}) {
    return (
        <span>{genre}</span>
    )
}

export default Movie;