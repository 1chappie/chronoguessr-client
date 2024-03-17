import {ReactComponent as Logo} from '../assets/logo_vector.svg';
import "./Header.css";
import ActionButton from "./ActionButton.jsx";
import {Link, useLocation} from "react-router-dom";
import {UserContext} from "../UserContext";
import React from "react";

export default function Header() {
    const { user } = React.useContext(UserContext);
    const location = useLocation();
    const path = location.pathname;

    /*TODO - the profile url isnt right*/
    let button;
    if (['/login', '/register', '/profile'].includes(path)) {
        button = null;
    } else if (user) {
        button = <ActionButton text={"PROFILE"} location={"/profile"}/>;
    } else {
        button = <ActionButton text={"LOG IN"} location={"/login"}/>;
    }

    return (
        <header className={"Header"}>
            <Link to={"/"} ><Logo/></Link>
            {button}
        </header>
    );
}