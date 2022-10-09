import { Routes, Route } from "react-router-dom";
import { Movie } from "Pages/Movie/Movie";
import { Home } from "Pages/Home/Home";
import { NavBar } from "./NavBar/NavBar";

export const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} /> 
        
      </Routes>
      
    </div>
  );
};
