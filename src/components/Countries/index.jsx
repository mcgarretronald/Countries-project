import React, { useState, useEffect } from "react";
import Navigationbar from "../Header";
import './index.css';
import { Link } from "react-router-dom";
import { Commet } from "react-loading-indicators";

function Countries() {
    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const link = 'https://restcountries.com/v3.1/all';

    useEffect(() => {
        async function getCountries() {
            try {
                const response = await fetch(link);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const results = await response.json();
                setCountries(results);
                setIsLoaded(true);
            } catch (error) {
                console.error('Error fetching countries:', error);
                setError(error);
                setTimeout(() => {
                    setIsLoaded(true);
                }, 2000);
            }
        }
        getCountries();
    }, []);

    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setSearchTerm(searchTerm);

        const filteredCountries = countries.filter((country) =>
            country.name.common.toLowerCase().includes(searchTerm)
        );

        setShowMessage(filteredCountries.length === 0);
    };

    const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm)
    );

    return (
        <>
            <Navigationbar />
            <div className="content">
                <h1 className="countriestitle">{isLoaded && !error ? "Countries" : null}</h1>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search"
                        autoFocus
                        value={searchTerm}
                        onChange={handleSearch}
                        className="search-input"
                        style={{ width: '60%', height: '40px',margin: '30px 20%', borderRadius: '5px', padding: '0 10px' }}
                    />
                </div>
                <div className="countries">
                    {showMessage && <p>No country found</p>}
                    {error ? (
                        <p>Error loading countries. Please try again later.</p>
                    ) : isLoaded ? (
                        filteredCountries.map((country, index) => (
                            <div key={index} className="country">
                                <Link to='/country' style={{ textDecoration: 'none' }} state={country}>
                                    <div className="card mb-" style={{ width: '18rem', height: '400px' }}>
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
                        ))
                    ) : (
                        <Commet color="#0dcaf0" size="large" text="" textColor="" />
                    )}
                </div>
            </div>
        </>
    );
}

export default Countries;
