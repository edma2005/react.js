import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaRegStar, FaStar } from "react-icons/fa";
import "./Product.css"
const Product = (props) => {
const { category, name, price } = props;
const [active, setActive] = useState(0);
    return (
        <div className="product-div">
            <p className="category-div">{category}</p>
            <p className="name-div">{name}</p>
            <div className="stars">
        {active >= 1 ? (
            <FaStar onClick={() => setActive(1)} />
            ) : (
            <FaRegStar onClick={() => setActive(1)} />
            )}
        {active >= 2 ? (
            <FaStar onClick={() => setActive(2)} />
            ) : (
            <FaRegStar onClick={() => setActive(2)} />
            )}
        {active >= 3 ? (
            <FaStar onClick={() => setActive(3)} />
            ) : (
            <FaRegStar onClick={() => setActive(3)} />
            )}
        {active >= 4 ? (
            <FaStar onClick={() => setActive(4)} />
            ) : (
            <FaRegStar onClick={() => setActive(4)} />
            )}
        {active >= 5 ? (
            <FaStar onClick={() => setActive(5)} />
            ) : (
            <FaRegStar onClick={() => setActive(5)} />
            )}
        </div>
        <p className="price-div">{price}</p>
        </div>
        );
    };
    Product.propTypes = {
    category: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    };
export default Product;