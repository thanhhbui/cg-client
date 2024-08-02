import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home";
import Game from "./components/Game";
import PlayComputer from "./components/PlayComputer";
import Board from "./components/co-tuong/Board";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play-online" element={<Board />} />
        <Route path="/play-computer" element={<PlayComputer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;