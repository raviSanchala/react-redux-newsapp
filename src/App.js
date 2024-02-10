import './App.css';
import React,{ Suspense }  from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function App() {
    return (
        <>
            <Router>
                <Navbar />
                <News />
            </Router>
        </>
    );
}

export default App;
