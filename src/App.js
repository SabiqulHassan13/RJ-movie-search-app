import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import SearchMovie from './components/SearchMovie';

function App() {
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      {/* <p>This is movie search app</p> */}

      <SearchMovie />
      
    </div>
  );
}

export default App;
