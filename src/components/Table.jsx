import React from 'react';
import './styling.css';

function Table({ sat }) {
  return (
    <table className="table-style">
      <thead>
        <tr>
          <th>Launch Date</th>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {sat.map((satellite, index) => (
          <tr key={index}>
            <td>{satellite.launchDate}</td>
            <td>{satellite.name}</td>
            <td>{satellite.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
