import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { routePath } from './constants/route';

// components
import { Home, CategoryMovie } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={routePath.categories} element={<CategoryMovie />} />
          <Route path={routePath.invalid} element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;