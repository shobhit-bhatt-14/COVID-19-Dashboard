import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid d-flex justify-content-evenly row">
        <Link
          className="col-sm-3 text-center border border-warning border-5 p-3 fs-4 rounded-3 bg-dark text-decoration-none text-info fw-bold"
          to="/all"
        >
          Show all Countries
        </Link>
        <Link
          className="col-sm-3 text-center border border-warning border-5 p-3 fs-4 rounded-3 bg-dark text-decoration-none text-info fw-bold"
          to="/country"
        >
          Specific Country
        </Link>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Home;
