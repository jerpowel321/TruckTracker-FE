// import React from 'react';

// const AppTwo = () => (
//   <div>
//     <h1>App</h1>
//   </div>
// );

// export default AppTwo;


import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from '../Navigation';

const App = () => (
  <Router>
    <Navigation />
  </Router>
);

export default App;