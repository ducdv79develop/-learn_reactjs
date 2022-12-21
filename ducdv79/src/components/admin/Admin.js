import React from "react";
import { Link } from 'react-router-dom';

export default function Admin() {
    return (
        <div>
            <h1> Admin Page</h1>
            <Link to="/home">Home Page </Link>
        </div>
    );
};