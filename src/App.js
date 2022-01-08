import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AllCountries from "./components/AllCountries.component";
import Country from "./components/Country.component";
import Home from "./components/Home.component";

const App = () => {
  return (
    <BrowserRouter>
      <h1 className="container-fluid text-center p-3 bg-dark text-white">
        COVID-19 Dashboard
      </h1>
      <br />
      <div className="container-fluid row">
        <Link className="ms-5 col-1" to="/">
          <button
            type="button"
            className="btn text-center fw-bold fs-4 p-1 btn-success rounded-3"
          >
            Home
          </button>
        </Link>
        <p className="fs-4 text-center col-10">
          Get the latest information on COVID worldwide
        </p>
      </div>
      <br />
      <br />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/all" element={<AllCountries />}></Route>
        <Route exact path="/country" element={<Country />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
