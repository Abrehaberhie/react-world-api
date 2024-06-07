
import React from 'react';

const CountryTable = ({ countries }) => {
  const tableData = countries.map((c) => (
    <tr key={c.cca3}>
      <td>
        <img src={c.flags.png ? c.flags.png : "no Image Available"} alt={`${c.name.common} flag`} width="50" />
      </td>
      <td>{c.name.common}</td>
      <td>{c.independent === false ? "false" : "true"}</td>
      <td>{c.population}</td>
      <td>{c.capital ? c.capital[0] : "N/A"}</td>
      <td><a href={c.maps.googleMaps} target="_blank" rel="noopener noreferrer">View Map</a></td>
    </tr>
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Country</th>
            <th>Independent?</th>
            <th>Population</th>
            <th>Capital</th>
            <th>Map</th>
          </tr>
        </thead>
        <tbody>
          {tableData}
        </tbody>
      </table>
    </div>
  );
};

export default CountryTable;