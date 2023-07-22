import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import ExerciseDetail from './pages/ExerciseDetail';
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

import './App.scss';

function App() {
  return (
    <>
      <Box width="400px">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exercise/:id' element={<ExerciseDetail />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;