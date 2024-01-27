import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Newslist from './Newslist';
import About from './About';

export default function Navbar(){
    return(
        <>
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className="nav-link" to="/aboutme">About Me</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/healths">Healths</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">Technology</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route exact path="/" element={<Newslist category='general' />}></Route>
                    <Route path="/aboutme" element={<About />}> </Route>
                    <Route exact path="/business" element={<Newslist category='business'/>}></Route>
                    <Route exact path="/entertainment"  element={<Newslist category='entertainment'/>}></Route>
                    <Route exact path="/health"><Newslist key="health" category='health' /></Route>
                    <Route exact path="/science"><Newslist key="science" category='science' /></Route>
                    <Route exact path="/sports"><Newslist key="sports" category='sports' /></Route>
                    <Route exact path="/technology"><Newslist key="technology" category='technology' /></Route> 
                </Routes>
            </Router>
        </>
        
    )
}