import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/prodotto/:prodottoId/" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
