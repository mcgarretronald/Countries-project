import React, { useState, useEffect } from "react";
import Navigationbar from "../Header";
import './index.css';
import { Link } from "react-router-dom";

function Countries() {
    const [countries, setCountries] = useState([]);
    const link = 'https://restcountries.com/v3.1/all';
    const [searchTerm, setSearchTerm] = useState('');
    const [showMessage, setShowMessage] = useState(false);

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

  
    const handleSearch = (event) => {
      
        const searchTerm = event.target.value.toLowerCase();
       
        const filteredCountries = countries.filter((country) =>
            country.name.common.toLowerCase().includes(searchTerm)
        );
      
        setSearchTerm(searchTerm);
     
        setShowMessage(filteredCountries.length === 0);
    }

    const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Navigationbar />
            <div className="content">
                <h1 className="countriestitle">Countries</h1>
                <div className="search-container" style={{ marginBottom: '20px', marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <input type="text" placeholder="Search" autoFocus  value={searchTerm} onChange={handleSearch} style={{ width: '300px', height: '50px', borderRadius: '5px', padding: '10px', border:'none' }} />
                </div>
                <div className="countries">
                    {showMessage && <p>No country found</p>}
                    {filteredCountries.map((country, index) => (
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
                    ))}
                </div>
            </div>
        </>
    );
}

export default Countries;

