import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
function Navigationbar() {
   
    return (
        
        <>
            <div className="navigationbar">

                <nav className="navbar bg-primary" data-bs-theme="dark">
                    <ul className="nav nav-pills">
                        <Link to='/' style={{textDecoration:'none'}}>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Country Wikipedia</a>
                        </li>
                        </Link>
                       
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Continents</a>
                            <ul className="dropdown-menu">
                                <Link to='/continents' state={'Africa'} style={{textDecoration:'none'}}> <li><a className="dropdown-item" href="#">Africa</a></li></Link>
                                <Link to='/continents' state={'Oceania'} style={{textDecoration:'none'}}> <li><a className="dropdown-item" href="#">Oceania</a></li></Link>
                                <Link to='/continents' state={'Europe'} style={{textDecoration:'none'}}> <li><a className="dropdown-item" href="#">Eurpoe</a></li></Link>
                                <Link to='/continents' state={'North America'} style={{textDecoration:'none'}}> <li><a className="dropdown-item" href="#">North America</a></li></Link>
                                <Link to='/continents' state={'South America'} style={{textDecoration:'none'}}> <li><a className="dropdown-item" href="#">South America</a></li></Link>
                                <Link to='/continents' state={'Asia'} style={{textDecoration:'none'}}> <li><a className="dropdown-item" href="#">Asia</a></li></Link>
                                <Link to='/continents' state={'North America'} style={{textDecoration:'none'}}> <li><a className="dropdown-item" href="#">North America</a></li></Link>
                                
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to='/countries' style={{textDecoration:'none'}}><a className="nav-link" href="#">Countries</a></Link>
                        </li>
                        
                    </ul>



                </nav>


            </div>



        </>
    )
}
export default Navigationbar