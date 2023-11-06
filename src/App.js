import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HeaderNav from "./components/Header/HeaderNav";
import Homepage from "./Pages/Homepage";
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";
import Favourites from "./Pages/Favourites";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <HeaderNav />
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="movies" element={<Movies />} />
            <Route path="tv-series" element={<Series />} />
            <Route path="watch-list" element={<Favourites />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;