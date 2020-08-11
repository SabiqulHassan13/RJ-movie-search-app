import React, { useState } from 'react';

const SearchMovie = () => {

    // state - input query, movies
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitted");

        const api_key = 'e01d68ece81e7a0533343e472598bd3e';
        // const query = 'jurassic park';

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results);
            setMovies(data.results);
        }catch(err) {
            console.error(err);
        }
        

    }


    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input 
                    className="input" 
                    type="text" 
                    name="query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="i.e. Jurassic Park"
                />
                <button type="submit" className="btn">Search</button>
            </form>

            <div className="card-list">
                { movies.filter(movie => movie.poster_path).map((movie, index) => (
                    <div className="card" key={movie.id}>
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
                )) }
            </div>

        </>
    );
}

export default SearchMovie;