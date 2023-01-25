import './App.css';
import TravelTable from './components/TravelTable';
import Travel from './components/Travel';
import EditTravel from './components/EditTravel';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navi from './components/NavBar';


function App() {
  return (
    <div className="App">
      
      <div id='title'><h1>Travel Sticky Note</h1> </div>
        <Router> 
         <Navi/>
        <Routes>
        <Route path='/'element={<TravelTable />} />
        <Route path='/travel/:id'element={<Travel />} />
        <Route path='/editTravel/:id'element={<EditTravel />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
