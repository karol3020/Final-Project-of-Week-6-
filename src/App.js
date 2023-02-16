import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Results from './pages/Results'
import Navbar from './components/Navbar'
import OneResult from './pages/OneResult';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar className='container' />
        <Routes>
          <Route path='/' element={ <Home /> } />
            <Route path=':Title' element={<Results />} />
              <Route path='one' element={<OneResult />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
