import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import About from './pages/About';


function App() {
  return (
    // main router allows the routes to connect and work
    <BrowserRouter>
      <div className="App">
        {/* //makes sure there's only one route at a time */}
        <Routes>
          <Route path = '/' element = {<Homepage/>}/>
          <Route path = '/contact' element = {<Contact/>}/>
          <Route path = '/About' element = {<About/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
