import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Movie = lazy(() => import("Pages/Movie/Movie"))
const Home = lazy(() => import("Pages/Home/Home"));
const MovieDetails = lazy(() => import("Pages/MovieDetails/MovieDetails"))
const Cast = lazy(() => import("Pages/Cast/Cast"))
const Reviews = lazy(() => import("Pages/Reviews/Reviews"))
const SharedLayout = lazy(() => import("./SharedLayout/SharedLayout"))

export const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movie" element={<Movie />} /> 
            <Route path="/movie/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route> 
          <Route path="*" element={<p>Not found page</p>} />
        </Route>
        
      </Routes>
      
    </div>
  );
};
