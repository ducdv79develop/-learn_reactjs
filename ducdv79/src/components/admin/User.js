import React from "react";
import { Link } from 'react-router-dom';

export default function User() {
    return (
        <div>
            <h1> User Page</h1>
            <Link to="/home">Home Page </Link>
        </div>
    );
};