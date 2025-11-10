import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, className, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? `${className} text-white outline-black border-black bg-green-500 font-semibold` : `${className} font-semibold`
            }
        >
            {children}
        </NavLink>
    );
};

export default MyLink;