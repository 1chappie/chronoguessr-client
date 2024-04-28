import Header from "../components/Header";
import React, {useRef, useState} from "react";
import "./LoginRegister.css";
import SubscreenButton from "../components/SubscreenButton";
import ActionButton from "../components/ActionButton";
import {Link, useNavigate} from "react-router-dom";
import Footer from "../components/Footer";
import axios from "../api/axios";
import {ValidationErrorZone} from "../components/ValidatorError";
import useAuth from "../hooks/useAuth";
import {jwtDecode} from 'jwt-decode'

const LOGIN_URL = "/auth/login";


export default function Login() {
    const navigate = useNavigate();

    const {auth, setAuth} = useAuth();
    const identifierRef = useRef();

    const [formFields, setFormFields] = useState({
        identifier: "",
        password: "",
    });

    const [errors, setErrors] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({
                    identifier: formFields.identifier,
                    password: formFields.password
                }),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                });
            const accessToken = response?.data?.accessToken;
            const decoded = jwtDecode(accessToken);
            setAuth({accessToken, user: decoded});
            setFormFields({
                identifier: "",
                password: ""
            });
            setErrors([]);
            navigate("/");
        } catch (error) {
            if(error.response?.data) {
                setErrors([error.response.data.error]);
                console.log(error.response.data.error)
            }
            else {
                setErrors(["Server is unavailable, please try again later."]);
                console.log(error)
            }
        }
    };

    return (
        <div className={"Login"}>
            <Header/>
            <main className={"LoginContent"}>
                <SubscreenButton label={"LOG IN"} link={"/"}/>
                <form onSubmit={handleSubmit}>
                    <label htmlFor={"email"}><i>Email or Username</i></label>
                    <input
                        type="text"
                        id={"identifier"}
                        ref={identifierRef}
                        value={formFields.identifier}
                        onChange={(e) =>
                            setFormFields({...formFields, identifier: e.target.value})}
                        required
                    />
                    <label htmlFor={"password"}><i>Password</i></label>
                    <input
                        type="password"
                        id={"password"}
                        value={formFields.password}
                        onChange={(e) =>
                            setFormFields({...formFields, password: e.target.value})}
                        required
                    />
                    {errors.length > 0 ? <ValidationErrorZone errors={{...errors}}/> : null}
                    <span className={"buttonContainer"}>
                        <ActionButton label={"LOG IN"} type={"submit"}/>
                    </span>
                </form>
                <Link to={"/register"} className={"hyperlinkButton"}>Create an account</Link>
            </main>
            <Footer/>
        </div>
    );
}
