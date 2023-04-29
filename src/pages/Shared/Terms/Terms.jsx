import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam dicta voluptates doloremque culpa quidem iure, non error mollitia? Placeat, natus.</p>
            <p>Go back to<Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;