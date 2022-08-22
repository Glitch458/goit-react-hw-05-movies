import { MovieSearchAPI } from 'services/SearchAPI';
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchName, setSearchName] = useState(searchParams.get('query') || '');
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    if (searchName !== '') {
      handleSubmit();
    }
  }, []);

  const handleInput = e => {
    setSearchName(e.currentTarget.value);
  };

  function handleSubmit(e) {
    if (e) e.preventDefault();

    if (searchName.trim() === '') {
      return alert('Please, input search name');
    }

    MovieSearchAPI(searchName).then(movies => setMoviesList(movies.results));
    setSearchParams({ query: searchName });
  }

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

export default Movies;
