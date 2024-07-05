import React from "react";
import './index.css';
import Navigationbar from "../Header";
import { useLocation } from "react-router-dom";

function Country() {
    const details = useLocation();
    const country = details.state;

    return (
        <>
            <Navigationbar />
            <div className="countryheader">
                <section><img src={country.coatOfArms?.png} alt={`${country.name.common} coat of arms`} /></section>
                <section className="name-sect"><h1 className="name">{country.name.common}</h1></section>
                <section><img src={country.flags?.png} alt={`${country.name.common} flag`} /></section>
            </div>
            <section className="country-details">
            <div className="information">
                <h3><b>Common Name</b>: {country.name.official}</h3>
                <h3><b>Capital City</b>: {country.capital}</h3>
                <h3><b>Continent</b>: {country.continents}</h3>
                <h3><b>Population</b>: {country.population}</h3>
                <h3><b>Area</b>: {country.area}</h3>
            </div>
           
            <div className="neighbors">
                <h3>Neighbouring Countries</h3>
                <ul>
                    {country.borders ? country.borders.map((border, index) => (
                        <li key={index}>{border}</li>
                    )) : <li>No neighboring countries</li>}
                </ul>
            </div>

            </section>
           
        </>
    );
}

export default Country;
