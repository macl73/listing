import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
    const {el} = props;

    if (el.error_messages) return;

    function renderCurrency(str) {
        if (str === "USD") {
            return "$";
        } else if (str === "EUR") {
            return "€";
        } else {
            return str;
        };
    };

    function renderQuantity(str) {
        if (str <= 10) {
            return "item-quantity level-low";
        } else if (str <= 20) {
            return "item-quantity level-medium";
        } else {
            return "item-quantity level-high";
        };
    };

    return (
        <div>
            <div className="item-image">
                <a href={el.url}>
                    <img src={el.MainImage.url_570xN} alt={el.title} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{el.title.length > 50 ? el.title.slice(0, 50) + "..." : el.title}</p>
                <p className="item-price">{renderCurrency(el.currency_code)}{el.price}</p>
                <p className={renderQuantity(el.quantity)}>{el.quantity} left</p>
            </div>
        </div>
    );
};

Item.propTypes = {
    el: PropTypes.object
};

export default Item;