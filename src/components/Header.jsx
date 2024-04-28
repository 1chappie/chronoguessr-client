import {ReactComponent as Logo} from '../assets/logo_vector.svg';
import "./Header.css";
import ActionButton from "./ActionButton.jsx";
import {Link, useLocation} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

import React from "react";

export default function Header() {
    const { auth } = useContext(AuthContext);
    const location = useLocation();
    const path = location.pathname;

    /*TODO - the profile url isnt right*/
    let button;
    if (['/login', '/register', '/profile'].includes(path)) {
        button = null;
    } else if (auth) {
        button = <ActionButton label={auth.user.username} link={"/profile"}/>;
    } else {
        button = <ActionButton label={"LOG IN"} link={"/login"}/>;
    }

    return (
        <header className={"Header"}>
            <Link to={"/"} ><Logo/></Link>
            {button}
        </header>
    );
}