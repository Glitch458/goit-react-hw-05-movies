import { Routes, Route } from 'react-router-dom';
import AppBar from './pages/AppBar';
import { lazy, Suspense } from 'react';

const Trending = lazy(() => import('./pages/Trending'));
const Movie = lazy(() => import('./pages/Movie'));
const Movies = lazy(() => import('./pages/Movies'));
const Cast = lazy(() => import('./pages/Cast'));
const Reviews = lazy(() => import('./pages/Reviews'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<>......</>}>
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<Movie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
