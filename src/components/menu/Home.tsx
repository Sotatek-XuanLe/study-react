import React from 'react';
import { Link } from 'react-router-dom';
const path = "/account";
const path2 = "/groupaccount";
const form = "/form";
const test = "/test";

const Home: React.FC = () => {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center",margin:"20px" }}>
                <Link to="/register">Register</Link>
                <Link style={{marginLeft:"5px" }} to="/signin">Sign In</Link>
            </div>
        </>
    );
};
export default Home;
