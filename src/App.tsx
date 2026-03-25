import React from 'react';
import { LeafletView } from '~/components';

const DEFAULT_LOCATION = {
  latitude: -23.5489,
  longitude: -46.6388,
};

const App = () => {
  return (
    <LeafletView
      mapCenterPosition={{
        lat: DEFAULT_LOCATION.latitude,
        lng: DEFAULT_LOCATION.longitude,
      }}
    />
  );
};

export default App;
