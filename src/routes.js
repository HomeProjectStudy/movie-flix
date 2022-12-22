import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie";
import { Error } from "./pages/Error";
import { Favorites } from "./pages/Favorites";
import { Header } from "./components/Header";
export function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/favorites" element={<Favorites />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
