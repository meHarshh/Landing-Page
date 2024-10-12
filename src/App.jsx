import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/home/Home';

import { useEffect, useState } from 'react';
import ModalForm from './components/modalForm/ModalForm';
import AllRoutes from './services/AllRoutes';
import { BrowserRouter as Router } from "react-router-dom"

function App() {


  return (
    <Router>
      <div className='app'>
        <AllRoutes />
      </div>
    </Router>
  )
}

export default App
