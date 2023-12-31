import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState } from 'react';
function App() {
  const [alert, setAlert]=useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>
        <NoteState>  
      <BrowserRouter>
      <Navbar/>
      <Alert alert={alert}/>

      <Routes>
      <Route exact path="/" element={<Home showAlert={showAlert} />} />
      <Route exact path="/About" element={<About />} />
      <Route exact path="/Login" element={<Login showAlert={showAlert} />} />
      <Route exact path="/Signup" element={<Signup showAlert={showAlert} />} />


    </Routes>
    </BrowserRouter>
      
    </NoteState>
      </>
  );
}
export default App;
