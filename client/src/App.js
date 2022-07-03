import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

//pages
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
//components
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/posts" />} />
        <Route path="/posts" element={<Home />} />
        <Route path="/new-post" element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
