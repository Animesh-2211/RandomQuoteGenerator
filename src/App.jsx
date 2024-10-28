import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar';
import Activity from './components/Activity';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Activity />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
