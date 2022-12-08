import LoginPage from '../LoginPage/LoginPage';
import ActorsListPage from '../ActorListPage/ActorListPage'
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage'


import { movies } from "../../data.js";
import "../App/App.css"
//dbs


import NavBar from '../../component/NavBar/NavBar';
 
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';



function App() {
  const [user, setUser] = useState({})

  function ActorList(movies) {
    
    let actors = movies.map((movie)=> (movie.actor))
    return actors;
  }

  return (
    <main className="App">
      App
            { user ?
      <>
        <NavBar />
        <Routes>        
          <Route 
            path="/" 
            element={<MoviesListPage movies={movies} />}
             />
          <Route 
            path="/movies/:movieName" 
            element={<MovieDetailPage movies={movies} />} />
          <Route  
            path="/actors" 
            element={<ActorsListPage movies={movies}  />} />
        </Routes>
      </>
        
      :
        <Routes>    
          <Route path="/" element={<LoginPage user={user} />} />
        </Routes>
    }
    </main>
  );
}

export default App;
