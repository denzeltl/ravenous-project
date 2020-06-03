import React, { useState } from 'react';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';
import yelp from '../../util/Yelp';

function App() {
    const [state, setState] = useState({
        businesses: [],
    });

    const searchYelp = (term, location, sortBy) => {
        yelp.search(term, location, sortBy).then((businesses) => {
            setState({
                businesses: state.businesses,
            });
        });
        console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    };

    return (
        <div className="App">
            <h1>ravenous</h1>
            <SearchBar searchYelp={searchYelp} />
            <BusinessList businesses={state.businesses} />
        </div>
    );
}

export default App;
