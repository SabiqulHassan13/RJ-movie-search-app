import React from 'react';

const SearchMovie = () => {
    return (
        <div>
            <form action="" className="form">
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