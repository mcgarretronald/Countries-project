import React, { useEffect, useState } from "react";
import Navigationbar from "../Header";
import { useLocation } from "react-router-dom";
import './index.css';
import { Link } from "react-router-dom";

function Continent() {
    const Continentinfo = useLocation();
    const continentname = Continentinfo.state;
    console.log(continentname);

    const [countries, setCountries] = useState([]);
    const link = 'https://restcountries.com/v3.1/all';

    useEffect(() => {
        async function getCountries() {
            try {
                const response = await fetch(link);
                const results = await response.json();
                console.log(results);
                setCountries(results);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        }
        getCountries();
    }, []);

    return (
        <>
            <Navigationbar />
            <div className="continent">
                <h1 className="continent-title">Countries in {continentname}</h1>
                <div className="countries">
                    {countries.filter(country => country.continents.includes(continentname)).map((country, index) => (
                        <div key={index} className="country">
                            <Link to='/country' style={{ textDecoration: 'none' }} state={country}>
                                <div className="card" style={{ width: '18rem', height: '400px' }}>
                                    <img src={country.flags.png} className="card-img-top" alt={`${country.name.common} flag`} />
                                    <div className="card-body">
                                        <h5 className="card-title">{country.name.official}</h5>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">{country.name.common} ({country.tld})</li>
                                        <li className="list-group-item"><b>Capital city</b>: {country.capital}</li>
                                        <li className="list-group-item"><b>Continent</b>: {country.continents.join(', ')}</li>
                                    </ul>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Continent;
