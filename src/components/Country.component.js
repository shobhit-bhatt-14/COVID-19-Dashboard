import { useEffect, useState } from "react";

const Country = (props) => {
  const [country, setCountry] = useState("");
  const [results, setResults] = useState([]);
  const [loc, setLoc] = useState("");

  const changeHandler = (e) => {
    setLoc(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setCountry(loc);

    setLoc("");
  };

  useEffect(() => {
    fetch(`https://corona.lmao.ninja/v2/countries/${country}?yesterday`, {
      method: "GET",
      redirect: "follow",
    })
      .then((res) => res.json())
      .then((data) => setResults(data))
      .catch((err) => console.log(err));
  }, [country]);

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
          <p className="fw-bold fs-5 text-danger text-wrap text-break">
            {props.results.country}
          </p>
        </div>
        <div className="col-3 border border-3 rounded border-secondary pt-2 m-4 text-center">
          <p className="fw-bolder fs-5 text-dark">Total Tests</p>
          <hr className="border border-2 rounded border-dark" />
          <p className="fw-bold fs-5 text-primary text-wrap text-break">
            {props.results.tests}
          </p>
        </div>
      </div>
      <div className="row justify-content-evenly">
        <div className="col-3 border border-3 rounded border-secondary pt-2 m-4 text-center">
          <p className="fw-bolder fs-5 text-dark">Total Cases</p>
          <hr className="border border-2 rounded border-dark" />
          <p className="fw-bold fs-5 text-primary text-wrap text-break">
            {props.results.cases}
          </p>
        </div>
        <div className="col-3 border border-3 rounded border-secondary pt-2 m-4 text-center">
          <p className="fw-bolder fs-5 text-dark">Total Active</p>
          <hr className="border border-2 rounded border-dark" />
          <p className="fw-bold fs-5 text-primary text-wrap text-break">
            {props.results.active}
          </p>
        </div>
      </div>
      <div className="row justify-content-evenly">
        <div className="col-3 border border-3 rounded border-secondary pt-2 m-4 text-center">
          <p className="fw-bolder fs-5 text-dark">Total Recovered</p>
          <hr className="border border-2 rounded border-dark" />
          <p className="fw-bold fs-5 text-primary text-wrap text-break">
            {props.results.recovered}
          </p>
        </div>
        <div className="col-3 border border-3 rounded border-secondary pt-2 m-4 text-center">
          <p className="fw-bolder fs-5 text-dark">Total Deaths</p>
          <hr className="border border-2 rounded border-dark" />
          <p className="fw-bold fs-5 text-primary text-wrap text-break">
            {props.results.deaths}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Country;
