import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <div className="navbar-header">
                    <Link className="navbar-brand text-white text-lg brand-text" to="/" >
                        SearchMovies
                    </Link>
                </div>

                <ul className="navbar-nav ml-auto text-light d-inline-block">
                    <li className="nav-item d-inline-block mr-4">
                        <i className="fab fa-imdb fa-5x" id="imdb-logo"/>
                    </li>
                    <li className="nav-item d-inline-block">
                        <i className="fab fa-react fa-5x" id="react-logo"/>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;