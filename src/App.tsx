import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import BookMark from './pages/bookmark';
import Error from './pages/error';
import Movies from './pages/movies';
import TvSeries from './pages/tv-series';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/BookMark" element={<BookMark/>}/>
        <Route path="/error" element={<Error/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/tvseries" element={<TvSeries/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
