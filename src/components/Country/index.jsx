import React from "react";
import "./index.css";
import Navigationbar from "../Header";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Country() {
    const details = useLocation();
    const country = details.state;

    return (
        <>
            <Navigationbar />
            <div className="countryheader">
                <section>
                    <img
                        src={country.coatOfArms?.png}
                        alt={`${country.name.common} coat of arms`}
                    />
                </section>
                <section className="name-sect">
                    <h1 className="name">{country.name.common}</h1>
                </section>
                <section>
                    <img src={country.flags?.png} alt={`${country.name.common} flag`} />
                </section>
            </div>
            <section className="country-details">
                <div className="information">
                    <h3>
                        <b>Common Name</b>: {country.name.official}
                    </h3>
                    <h3>
                        <b>Capital City</b>: {country.capital}
                    </h3>
                    <h3>
                        <b>Continent</b>: {country.continents}
                    </h3>
                    <h3>
                        <b>Population</b>: {country.population}
                    </h3>
                    <h3>
                        <b>Area</b>: {country.area} km²
                    </h3>
                    <div className="map" style={{ float: "left" }}>
                        <h3>Map</h3>
                        {/* <a href={country.map.googleMaps} target="_blank" rel="noopener noreferrer"><button type="button">Show Map</button></a> */}

                    </div>
                </div>
                <div className="neighbors">
                    <h3>Neighbouring Countries</h3>
                    {country.borders ? (
                        <ul>
                            {country.borders.map((border, index) => (
                                <Link to={`/bodering-country`} state={border} key={index}>
                                    <li>{border}</li>
                                </Link>
                            ))}
                        </ul>
                    ) : (
                        <li>No neighboring countries</li>
                    )}
                </div>
            </section>
        </>
    );
}

export default Country;
