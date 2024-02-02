import React, {Suspense} from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Newslist from './Newslist';
import About from './About';

export default function Navbar(){
    // const Newslist = React.lazy(() => import()) 
    return(
        <>
            <Suspense>
                <Routes>
                    <Route exact path="/" element={<React.Fragment><Newslist category="general" /> </React.Fragment> } />
                    <Route path="/aboutme" element={<About />} /> 
                    <Route exact path="/business" element={<Newslist category='business'/>} />
                    <Route exact path="/entertainment"  element={<Newslist category='entertainment'/>} />
                    <Route exact path="/health" element={<Newslist key="health" category='health' />} />
                    <Route exact path="/science" element={<Newslist key="science" category='science' />} />
                    <Route exact path="/sports" element={<Newslist key="sports" category='sports' />} />
                    <Route exact path="/technology" element={<Newslist key="technology" category='technology' />}/> 
                </Routes>
            </Suspense>
        </>
    )
}