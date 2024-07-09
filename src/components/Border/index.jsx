

import React, { useState, useEffect } from "react";
import './index.css';   
import Navigationbar from "../Header";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Border() {  
    // Get the border code from the location state.
    const location = useLocation();
    const border = location.state;  
    console.log(border);
    const [country, setCountry] = useState(null);
    const link = 'https://restcountries.com/v3.1/all';

    // Fetch the country details using the border code.
    useEffect(() => {
        async function getCountry() {
            try {
                const response = await fetch(link);
                const results = await response.json();
                setCountry(results.find(country => country.cca3 === border));
            } catch (error) {
                console.error('Error fetching country details:', error);
            }
        }
        getCountry();
    }, [border]);

    return (
        <>
            <Navigationbar />
           
            <div className="countries">
                {country ? (
                    <div className="country" style={{marginTop:'50px'}}>
                        <Link to='/country' style={{textDecoration:'none'}} state={country}>
                            <div className="card" style={{ width: '18rem', height: '400px' }}>
                                <img src={country.flags.png} className="card-img-top" alt={`${country.name.common} flag`} />
                                <div className="card-body">
                                    <h5 className="card-title">{country.name.official}</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{country.name.common} ({country.tld})</li>
                                    <li className="list-group-item"><b>Capital city</b>: {country.capital}</li>
                                    <li className="list-group-item"><b>Continent</b>: {country.continents}</li>
                                </ul>
                            </div>
                        </Link>
                    </div>
                ) : (
                    <p>Loading country details...</p>
                )}
            </div>
        </>
    );
}

export default Border;

