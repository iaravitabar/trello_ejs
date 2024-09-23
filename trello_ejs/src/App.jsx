import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

import React from 'react';
import Board from './components/Board';
import Header from './components/Header';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Board />
        </div>
    );
};

export default App;