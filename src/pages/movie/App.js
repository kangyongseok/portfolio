import React, { Component } from 'react';
import Movie from './component/Movie';
import './App.scss';


class App extends Component {

    state = {
        
    }

    componentDidMount() {
        this._getMovies();
    }

    _getMovies = async () => {
        const movies = await this._callApi()
        this.setState({
            movies
        })
    }

    _callApi = () => {
        return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
        .then(response => response.json())
        .then(json => json.data.movies)
        .catch(err => console.log(err))
    }


    _renderMovies = () => {
        const movies = this.state.movies.map(movie => {
            return <Movie 
            title={movie.title} 
            poster={movie.large_cover_image} 
            key={movie.id} 
            genres={movie.genres} 
            synopsis={movie.synopsis}
            />
        })
        return movies
    }    

    render() {
        const { movies } = this.state;
        return (
            <div className="movie-wrapper">
                {movies ? this._renderMovies() : 'Loading'}
            </div>
        );
    }
}

export default App;