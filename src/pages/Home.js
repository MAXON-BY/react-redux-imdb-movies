import React, {Component} from 'react';
import Search from "../components/search/Search";
import {connect} from "react-redux";
import MoviesList from "../components/MoviesList/MoviesList";
// import Loading from "../components/Loading/Loading";


class Home extends Component {
    render() {
        // const {isLoader} = this.props;
        return (
            <div className='container'>
                <Search/>
                <MoviesList/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoader: state.movies.isLoader
});

export default connect(mapStateToProps)(Home);