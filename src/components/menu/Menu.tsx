import React from 'react';
import { Link } from 'react-router-dom';
const path = "/account"
const Menu: React.FC = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Link to="/">Home</Link>
        <Link style={{ display: "block", textAlign: "center", margin: "10px" }} to={path}>Manager Account</Link>
      </div>
    </>
  );
};
export default Menu;
