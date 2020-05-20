import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {
    const [state, setState] = useState({
        term: '',
        location: '',
        sortBy: 'Best Match',
    });

    const sortByOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count ',
    };

    const getSortByClass = (sortByOption) => {
        if (state.sortBy === sortByOption) {
            return 'active';
        } else {
            return '';
        }
    };

    const handleSortByChange = (sortByOption) => {
        setState({
            term: state.term,
            location: state.location,
            sortBy: sortByOption,
        });
    };

    const handleTermChange = (event) => {
        setState({
            term: event.target.value,
            location: state.location,
            sortBy: state.sortBy,
        });
    };

    const handleLocationChange = (event) => {
        setState({
            term: state.term,
            location: event.target.value,
            sortBy: state.sortBy,
        });
    };

    const handleSearch = (event) => {
        event.preventDefault();
        props.searchYelp(state.term, state.location, state.sortBy);
    };

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return (
                <li
                    onClick={() => {
                        handleSortByChange(sortByOption);
                    }}
                    className={getSortByClass(sortByOption)}
                    key={sortByOptionValue}
                >
                    {sortByOption}
                </li>
            );
        });
    };

    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>{renderSortByOptions()}</ul>
            </div>
            <div className="SearchBar-fields">
                <input onChange={handleTermChange} placeholder="Search Businesses" />
                <input onChange={handleLocationChange} placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <a onClick={handleSearch} href="/">
                    Let's Go
                </a>
            </div>
        </div>
    );
}

export default SearchBar;
