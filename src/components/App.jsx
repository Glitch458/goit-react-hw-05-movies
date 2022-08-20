import { Routes, Route } from 'react-router-dom';
import { AppBar } from './pages/AppBar';
import { Trending } from './pages/Trending';
import { Movie } from './pages/Movie';
import { Movies } from './pages/Movies';
import { Reviews } from './pages/Reviews';
import { Cast } from './pages/Cast';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Trending />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<Movie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
