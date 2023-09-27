import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <div>
     <Routes>
       <Route path='/' element={<LandingPage/>}/>
       <Route path='/home' element={  <Home/>}/>
        
       
     </Routes>
    </div>
  );
}

export default App;
