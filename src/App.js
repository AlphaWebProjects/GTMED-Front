import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import LandingPage from './Pages/LandingPage';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound';
import LeadsPage from './Pages/LeadsPage';
import { UserProvider } from './context/UserContext';
import React, { useEffect, useState } from 'react';
import scripts from './scripts'
import Obrigado from './Components/LeadsPage/Obrigado';

//pasta de imagens está em assets

function App() {

  const [script, setScript] = useState(scripts.Curso.Clinica);

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/landing" element={<LandingPage script={script}/>} />
          <Route path="/evento-gtmed" element={<LeadsPage/>} />
          <Route path="/home" element={<HomePage script={script} setScript={setScript}/>} />
          <Route path="/obrigado" element={<Obrigado />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <ToastContainer 
          position="top-right"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

      </Router>
    </UserProvider>
  );
}

export default App;