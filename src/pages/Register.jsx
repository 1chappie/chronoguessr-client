import Header from "../components/Header";
import React, {useState} from "react";
import {UserContext} from "../UserContext";
import "./LoginRegister.css";
import SubscreenButton from "../components/SubscreenButton";
import ActionButton from "../components/ActionButton";
import {Link} from "react-router-dom";
import {validate} from "../utils/validator.js"
import ValidationErrorZone from "../components/ValidatorError";
import Footer from "../components/Footer";


export default function Register() {
    // const {setUser} = React.useContext(UserContext);

    /*const handleLogin = async () => {
        const user = await performLogin();

        setUser(user);
    };*/


    {/*TODO post AND ADD POST INPUT VALIDATION IE username email*/
        
    }

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
        setErrors(errors);
        if (errors.length > 0) {
            console.log("invalid");
            console.log(errors);
        } else {
            console.log("valid");
            console.log(errors);
        }
    };

    return (
        <div className={"Login"}>
            <Header/>
            <main className={"LoginContent"}>
                <SubscreenButton text={"SIGN UP"} link={"/login"}/>
                <form onSubmit={handleSubmit}>
                    <label htmlFor={"email"}><i>Email</i></label>
                    <input
                        id={"email"}
                        type="text"
                        value={formFields.email}
                        onChange={(e) => {
                            setFormFields({...formFields, email: e.target.value})
                        }}
                    />
                    <label htmlFor={"username"}><i>Username</i></label>
                    <input
                        id={"username"}
                        type="text"
                        value={formFields.username}
                        onChange={(e) => {
                            setFormFields({...formFields, username: e.target.value})
                        }}
                    />
                    <label htmlFor={"region"}><i>Region</i></label>
                    <select id={"region"} value={formFields.region} onChange={(e) => {
                        setFormFields({...formFields, region: e.target.value})
                    }}>
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
                        id={"password"}
                        type="password"
                        value={formFields.password}
                        onChange={(e) => {
                            setFormFields({...formFields, password: e.target.value})
                        }}
                    />
                    <label htmlFor={"confirmPassword"}><i>Confirm Password</i></label>
                    <input
                        id={"confirmPassword"}
                        type="password"
                        value={formFields.confirmPassword}
                        onChange={(e) => {
                            setFormFields({...formFields, confirmPassword: e.target.value})
                        }}
                    />

                    {errors.length>0 ? <ValidationErrorZone errors={{...errors}}/> : null}

                    <span className={"buttonContainer"}>
                        <ActionButton text={"SIGN UP"} type={"submit"}/>
                    </span>

                </form>
                <Link to={"/login"} className={"hyperlinkButton"}>I already have an account</Link>
            </main>
            <Footer/>
        </div>
    );
}
