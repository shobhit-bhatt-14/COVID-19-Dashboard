import { useEffect, useState } from "react";

const Country = (props) => {
  const [country, setCountry] = useState("");
  const [results, setResults] = useState([]);
  const [loc, setLoc] = useState("");

  let url = `https://corona.lmao.ninja/v2/countries/${country}?yesterday`;

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const changeHandler = (e) => {
    setLoc(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setCountry(loc);

    setLoc("");
  };

  useEffect(() => {
    fetch(url, requestOptions)
      .then((res) => res.json())
      .then((data) => setResults(data))
      .catch((err) => console.log(err));
  }, [results]);

  return (
    <div className="container text-center">
      <form onSubmit={submitHandler}>
        <input
          className="rounded-start"
          type="text"
          value={loc}
          onChange={changeHandler}
        />
        <button className="button btn-primary rounded-end" type="submit">
          Go
        </button>
      </form>
      <br />
      <br />
      {country && <Info results={results} />}
    </div>
  );
};

const Info = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-evenly">
        <div className="col-3 border border-3 rounded border-secondary pt-2 m-4 text-center">
          <p className="fw-bolder fs-5 text-dark">Country</p>
          <hr className="border border-2 rounded border-dark" />
          <p className="fw-bold fs-5 text-danger">{props.results.country}</p>
        </div>
        <div className="col-3 border border-3 rounded border-secondary pt-2 m-4 text-center">
          <p className="fw-bolder fs-5 text-dark">Total Tests</p>
          <hr className="border border-2 rounded border-dark" />
          <p className="fw-bold fs-5 text-primary">{props.results.tests}</p>
        </div>
      </div>
      <div className="row justify-content-evenly">
        <div className="col-3 border border-3 rounded border-secondary pt-2 m-4 text-center">
          <p className="fw-bolder fs-5 text-dark">Total Cases</p>
          <hr className="border border-2 rounded border-dark" />
          <p className="fw-bold fs-5 text-primary">{props.results.cases}</p>
        </div>
        <div className="col-3 border border-3 rounded border-secondary pt-2 m-4 text-center">
          <p className="fw-bolder fs-5 text-dark">Total Active</p>
          <hr className="border border-2 rounded border-dark" />
          <p className="fw-bold fs-5 text-primary">{props.results.active}</p>
        </div>
      </div>
      <div className="row justify-content-evenly">
        <div className="col-3 border border-3 rounded border-secondary pt-2 m-4 text-center">
          <p className="fw-bolder fs-5 text-dark">Total Recovered</p>
          <hr className="border border-2 rounded border-dark" />
          <p className="fw-bold fs-5 text-primary">{props.results.recovered}</p>
        </div>
        <div className="col-3 border border-3 rounded border-secondary pt-2 m-4 text-center">
          <p className="fw-bolder fs-5 text-dark">Total Deaths</p>
          <hr className="border border-2 rounded border-dark" />
          <p className="fw-bold fs-5 text-primary">{props.results.deaths}</p>
        </div>
      </div>
    </div>
  );
};

export default Country;
