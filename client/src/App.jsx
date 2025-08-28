import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Lobby from './Pages/Lobby';
import Room from './Pages/Room';
import { SocketProvider } from './context/SocketProvider';

const App = () => {
  return (
    <div>
      <SocketProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Lobby />} />
            <Route path="/room/:id" element={<Room />} />
          </Routes>
        </Router>
      </SocketProvider>
    </div>
  );
}

export default App
