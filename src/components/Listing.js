import React from 'react';
import PropTypes from 'prop-types';
import Item from "./Item.js";

function Listing(props) {
    const {items} = props;

    return (
        <div className="item-list">
            {items.map(el => <div className="item" key={el.listing_id}><Item el={el}/></div>)}
        </div>
    );
};

Listing.propTypes = {
    items: PropTypes.array
};

export default Listing;