// App.js
import React from 'react'
import JobsList from './components/JobListings'
import Filters from './components/Filters'

const App = () => {
  return (
    <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      {/* <div> */}
        {/* <Filters style={{ display: 'flex' }} /> */}
      {/* </div> */}
      <div>
        <JobsList style={{ display: 'flex' }}/>
      </div>
    </div>
  );
};

export default App;