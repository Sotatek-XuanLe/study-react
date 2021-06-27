import React from 'react';
import { Link } from 'react-router-dom';
const path = "/account";
const path2 = "/groupaccount";

const Menu: React.FC = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Link to="/">Home</Link>
        <Link style={{ display: "block", textAlign: "center", margin: "10px" }} to={path}>Manager Account</Link>
        <Link style={{ display: "block", textAlign: "center" }} to={path2}>Group Account </Link>
      </div>
      <div style={{display:"block",textAlign:"center"}}>
        ReactJS TypeScript
      </div>
    </>
  );
};
export default Menu;
