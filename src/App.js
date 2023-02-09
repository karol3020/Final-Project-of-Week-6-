import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Results from './pages/Results'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar className='container' />
        <Routes>
          <Route path='/' element={ <Home /> } />
            <Route path='/results' element={<Results />} />
              <Route> {/* One Result */} </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
