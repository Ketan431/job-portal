// App.js
import React from 'react';
import JobsList from './components/JobListings';
import Filters from './components/Filters';

const App = () => {
  return (
    
    <div>
      <Filters />
      <JobsList />
    </div>
  );
};

export default App;