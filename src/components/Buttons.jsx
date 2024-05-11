import React from 'react';
import './styling.css';

function Buttons({ filterByType, displaySats }) {
   return (
      <div className="flex-container">
         {displaySats.map((orbitType, index) => (
            <button key={index} onClick={() => filterByType(orbitType)}>
               {orbitType} Orbit
            </button>
         ))}
         <button onClick={() => setData(displaySats)}>
            All Orbits
         </button>
      </div>
   );
}

export default Buttons;
