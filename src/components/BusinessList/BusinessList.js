import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

function BusinessList() {
    return (
        <div class="BusinessList">
            {this.props.businesses.map((business) => (
                <Business business={business} />
            ))}
        </div>
    );
}

export default BusinessList;
