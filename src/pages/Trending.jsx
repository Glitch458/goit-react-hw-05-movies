import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { TrendingSearchAPI } from 'services/SearchAPI';

const Trending = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    TrendingSearchAPI().then(movies => setMovies(movies));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trending;
