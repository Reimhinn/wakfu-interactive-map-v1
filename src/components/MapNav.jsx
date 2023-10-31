import React, { useState } from 'react';
import '../styles/map-nav.css';

function MapNav() {
  const [mapSelected, setMapSelected] = useState('Astrub')

  return (
    <nav id="map-nav">
      <ul id="map-nav-list">
        <li
          style={{ color: mapSelected === 'Astrub' ? 'green' : 'black' }}
          onClick={() => setMapSelected('Astrub')}
        >
          Astrub
        </li>
        <li
          style={{ color: mapSelected === 'Brakmar' ? 'green' : 'black' }}
          onClick={() => setMapSelected('Brakmar')}
        >
          Brakmar
        </li>
        <li
          style={{ color: mapSelected === 'Amakna' ? 'green' : 'black' }}
          onClick={() => setMapSelected('Amakna')}
        >
          Amakna
        </li>
        <li
          style={{ color: mapSelected === 'Bonta' ? 'green' : 'black' }}
          onClick={() => setMapSelected('Bonta')}
        >
          Bonta
        </li>
        <li
          style={{ color: mapSelected === 'Sufokia' ? 'green' : 'black' }}
          onClick={() => setMapSelected('Sufokia')}
        >
          Sufokia
        </li>
        <li
          style={{ color: mapSelected === 'Autres' ? 'green' : 'black' }}
          onClick={() => setMapSelected('Autres')}
        >
          Autres
        </li>
      </ul>
    </nav>
  );
}

export default MapNav;