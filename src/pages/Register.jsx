import Header from "../components/Header";
import React, {useRef, useState} from "react";
import "./LoginRegister.css";
import SubscreenButton from "../components/SubscreenButton";
import ActionButton from "../components/ActionButton";
import {Link, useNavigate} from "react-router-dom";
import {validate} from "../utils/validator.js"
import {ValidationErrorZone} from "../components/ValidatorError";
import Footer from "../components/Footer";
import axios from "../api/axios"
import {jwtDecode} from "jwt-decode";
import useAuth from "../hooks/useAuth";

const REGISTER_URL = "/auth/register";


export default function Register() {
    const usernameRef = useRef();
    const emailRef = useRef();
    const regionRef = useRef();
    const {auth, setAuth} = useAuth();
    const navigate = useNavigate();

    const [formFields, setFormFields] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        region: ""
    });

    const [errors, setErrors] = useState([]);

    const localValidation = () => {
        const errors = [];
        !validate.username(formFields.username) &&
        errors.push("Username must be at least 3 characters long and can only contain letters and numbers");
        !validate.email(formFields.email) &&
        errors.push("Email address isn't valid");
        !validate.region(formFields.region) &&
        errors.push("Region not selected");
        !validate.password(formFields.password) &&
        errors.push("Password must be at least 6 characters long");
        !validate.confirmPassword(formFields.password, formFields.confirmPassword) &&
        errors.push("Passwords do not match");
        return errors;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = localValidation();
        if (errors.length > 0) {
            setErrors(errors);
        } else {
            try {
                const response = await axios.post(REGISTER_URL,
                    JSON.stringify({
                        username: formFields.username,
                        email: formFields.email,
                        region: formFields.region,
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
                    username: "",
                    password: "",
                    confirmPassword: "",
                    email: "",
                    region: ""
                });
                setErrors([]);
                navigate("/");
            } catch (error) {
                if(error.response?.data)
                    setErrors([error.response.data.error]);
                else
                    setErrors(["Server is unavailable, please try again later."]);
            }
        }
    };

    return (
        <div className={"Login"}>
            <Header/>
            <main className={"LoginContent"}>
                <SubscreenButton label={"SIGN UP"} link={"/login"}/>
                <form onSubmit={handleSubmit}>
                    <label htmlFor={"email"}><i>Email</i></label>
                    <input
                        type="text"
                        id={"email"}
                        ref={emailRef}
                        autoComplete="off"
                        value={formFields.email}
                        onChange={(e) =>
                            setFormFields({...formFields, email: e.target.value})}
                        required
                    />
                    <label htmlFor={"username"}><i>Username</i></label>
                    <input
                        type="text"
                        id={"username"}
                        ref={usernameRef}
                        autoComplete="off"
                        value={formFields.username}
                        onChange={(e) =>
                            setFormFields({...formFields, username: e.target.value})}
                        required
                    />
                    <label htmlFor={"region"}><i>Region</i></label>
                    <select
                        id={"region"}
                        ref={regionRef}
                        autoComplete="off"
                        value={formFields.region}
                        onChange={(e) =>
                            setFormFields({...formFields, region: e.target.value})}
                        required
                    >
                        <option value="" disabled></option>
                        <option value={"NA"}>North America</option>
                        <option value={"SA"}>South America</option>
                        <option value={"EU"}>Europe</option>
                        <option value={"AS"}>Asia</option>
                        <option value={"AF"}>Africa</option>
                        <option value={"OC"}>Oceania</option>
                    </select>
                    <label htmlFor={"password"}><i>Password</i></label>
                    <input
                        type="password"
                        id={"password"}
                        value={formFields.password}
                        onChange={(e) =>
                            setFormFields({...formFields, password: e.target.value})}
                        required
                    />
                    <label htmlFor={"confirmPassword"}><i>Confirm Password</i></label>
                    <input
                        type="password"
                        id={"confirmPassword"}
                        value={formFields.confirmPassword}
                        onChange={(e) =>
                            setFormFields({...formFields, confirmPassword: e.target.value})}
                        required
                    />

                    {errors.length > 0 ? <ValidationErrorZone errors={{...errors}}/> : null}

                    <span className={"buttonContainer"}>
                        <ActionButton label={"SIGN UP"} type={"submit"}/>
                    </span>

                </form>
                <Link to={"/login"} className={"hyperlinkButton"}>I already have an account</Link>
            </main>
            <Footer/>
        </div>
    );
}
