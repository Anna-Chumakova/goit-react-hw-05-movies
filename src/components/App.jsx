import { Routes, Route } from "react-router-dom";
import { Movie } from "Pages/Movie/Movie";
import { Home } from "Pages/Home/Home";
import { NavBar } from "./NavBar/NavBar";
import { MovieDetails } from "Pages/MovieDetails/MovieDetails";
import { Cast } from "Pages/Cast/Cast";
import { Reviews } from "Pages/Reviews/Reviews";

export const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} /> 
        <Route path="/movie/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route> 
        <Route path="*" element={<p>Not found page</p>} />
      </Routes>
      
    </div>
  );
};
