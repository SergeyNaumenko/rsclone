import React from 'react';
import { Header } from './components/header.commponent';
import { Footer } from './components/footer.component';
import MovieApiService from './services/movieApiService';

const App: React.FC = () => {

  const clickHandler = async() => {
    const res = await fetch('http://localhost:5000/api/auth/reg',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({login: 'atgbt',password: '33333'})
    });
    const data = await res.json();
    console.log(data);
    return data;
  }

  const movieApiService = new MovieApiService();
  const genres = movieApiService.getGenres();
  console.log(genres)

  const topRated = movieApiService.getTopRatedMovies();
  console.log(topRated)

  return (
    <div className="App">
      <header className="App-header">
        init commit
      </header>
      <button onClick={clickHandler}>Fetch data</button>
      <Header/>
      <Footer/>
    </div>
  );
};

export default App;
