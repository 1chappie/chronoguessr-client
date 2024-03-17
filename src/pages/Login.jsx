import Header from "../components/Header";
import React, {useState} from "react";
import {UserContext} from "../UserContext";
import "./LoginRegister.css";
import SubscreenButton from "../components/SubscreenButton";
import ActionButton from "../components/ActionButton";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";


export default function Login() {
    const {setUser} = React.useContext(UserContext); // Get the setUser function from your context

    /*const handleLogin = async () => {
        const user = await performLogin();
        //placeholder
        setUser(user);
    };*/

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(username, password);
        // try {
        //     const response = await axios.post("/api/login", {username, password});
        // } catch (error) {
        // }
    };

    return (
        <div className={"Login"}>
            <Header/>
            <main className={"LoginContent"}>
                <SubscreenButton text={"LOG IN"} link={"/"}/>
                <form onSubmit={handleSubmit}>
                    <label htmlFor={"email"}><i>Email or Username</i></label>
                    <input
                        id={"email"}
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor={"password"}><i>Password</i></label>
                    <input
                        id={"password"}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className={"buttonContainer"}>
                        <ActionButton text={"LOG IN"} type={"submit"}/>
                    </span>
                </form>
                <Link to={"/register"} className={"hyperlinkButton"}>Create an account</Link>
            </main>
            <Footer/>
        </div>
    );
}
