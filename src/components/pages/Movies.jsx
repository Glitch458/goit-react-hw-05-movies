import { MovieSearchAPI } from 'components/services/SearchAPI';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const Movies = () => {
  const [searchName, setSearchName] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const { movieId } = useParams();

  const handleInput = e => {
    setSearchName(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchName.trim() === '') {
      return alert('Please, input search name');
    }

    MovieSearchAPI(searchName).then(movies => setMoviesList(movies.results));
  };

  return (
    <>
      <header className="searchbar">
        <form className="searchForm" onSubmit={handleSubmit}>
          <button type="submit" className="searchForm-button">
            <span className="searchForm-button-label">Search</span>
          </button>

          <input
            className="searchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={searchName}
            onChange={handleInput}
          />
        </form>
      </header>
      <ul>
        {moviesList &&
          moviesList.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};
