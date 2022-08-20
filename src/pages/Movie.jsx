import { useState, useEffect } from 'react';
import { MovieIdAPI, IMG_URL } from 'services/SearchAPI';
import { Link, useParams, Outlet, useNavigate } from 'react-router-dom';

const Movie = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    console.log('fetch');
    MovieIdAPI(movieId).then(movie => setMovie(movie));
  }, [movieId]);

  return (
    <>
      {movie && (
        <div className="container">
          <button className="navButton" type="button" onClick={() => nav(-1)}>
            Go back
          </button>
          <div className="main">
            <img src={IMG_URL + movie.poster_path} alt={movie.tagline} />
            <div>
              <h2>{movie.title}</h2>
              <p>User score: {movie.vote_average}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              {movie.genres &&
                movie.genres.map(genre => (
                  <span key={genre.id}>{genre.name + ' '}</span>
                ))}
            </div>
          </div>
          <hr />
          <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <hr />
          </div>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default Movie