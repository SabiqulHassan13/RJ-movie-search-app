import React from 'react';

const SearchMovie = () => {

    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitted");

        const api_key = 'e01d68ece81e7a0533343e472598bd3e';
        const query = 'jurassic park';

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        }catch(err) {
            console.error(err);
        }
        

    }


    return (
        <div>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input 
                    className="input" 
                    type="text" 
                    name="query"
                    placeholder="i.e. Jurassic Park"
                />
                <button type="submit" className="btn">Search</button>
            </form>
        </div>
    );
}

export default SearchMovie;