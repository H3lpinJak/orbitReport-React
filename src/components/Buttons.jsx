import React from 'react';
import './styling.css';
import satData from './satData';

function Buttons({ filterByType, setSat, displaySats }) {
   return (
      <div className="flex-container">
         {displaySats.map((orbitType, index) => (
            <button key={index} onClick={() => filterByType(orbitType)}>
               {orbitType} Orbit
            </button>
         ))}
         <button onClick={() => setSat(satData)}>
            All Orbits
         </button>
      </div>
   );
}

export default Buttons;
