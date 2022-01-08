import { useState } from "react";

const AllCountries = () => {
  const url = `https://corona.lmao.ninja/v2/countries?yesterday`;
  const [results, setResults] = useState([]);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(url, requestOptions)
    .then((res) => res.json())
    .then((data) => setResults(data))
    .catch((err) => console.log(err));

  return (
    <div>
      <table className="table table-hover text-center">
        <thead>
          <tr className="table-secondary">
            <th>Country</th>
            <th>Continent</th>
            <th>Cases</th>
            <th>Deaths</th>
            <th>Recovered</th>
            <th>Active</th>
            <th>Tests</th>
            <th>Population</th>
            <th>Flag</th>
          </tr>
        </thead>
        <tbody>
          <DisplayTable results={results} />
        </tbody>
      </table>
    </div>
  );
};

const DisplayTable = (props) => {
  return props.results.map((d) => {
    return (
      <tr className="table-light" key={d.country}>
        <td>{d.country}</td>
        <td>{d.continent}</td>
        <td>{d.cases}</td>
        <td>{d.deaths}</td>
        <td>{d.recovered}</td>
        <td>{d.active}</td>
        <td>{d.tests}</td>
        <td>{d.population}</td>
        <td>
          <img className="col-2" src={d.countryInfo.flag} alt="flag" />
        </td>
      </tr>
    );
  });
};

export default AllCountries;
