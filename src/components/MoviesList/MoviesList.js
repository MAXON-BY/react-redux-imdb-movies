import React, {Component} from 'react';
import MoviesItem from "../MoviesItem/MoviesItem";
import {connect} from "react-redux";

class MoviesList extends Component {
    render() {
        const {movies} = this.props;
        return (
            <div className="row">
                {movies
                    ? movies.map((movie, index) => (<MoviesItem key={index} movie={movie}/>))
                    : <p style={{margin: "0 auto"}}>Not found :(</p>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
});

export default connect(mapStateToProps)(MoviesList);