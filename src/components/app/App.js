import React from 'react';
import './App.css'
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Home from "../../pages/Home";
import Movie from "../../pages/Movie";
import {Route, Switch} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Navbar/>

            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/movie/:id" component={Movie}/>
            </Switch>

            <Footer/>
        </div>
    );
}

export default App;
