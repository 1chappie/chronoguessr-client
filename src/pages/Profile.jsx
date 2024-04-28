import useLogout from "../hooks/useLogout";
import ActionButton from "../components/ActionButton";
import {useNavigate} from "react-router-dom";
import "./Profile.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubscreenButton from "../components/SubscreenButton";
import useAuth from "../hooks/useAuth";

export default function Profile() {
    const logout = useLogout();
    const navigate = useNavigate();
    const {auth} = useAuth();
    console.log("Hooked useAuth", auth)

    return (
        <div className={"Profile"}>
            <Header/>
            <main className={"ProfileContent"}>
                <SubscreenButton label={auth.user.username}/>
                <ActionButton call={() => {
                    logout();
                    navigate("/");
                }} label={"LOG OUT"}/>
            </main>
            <Footer/>
        </div>
    );
}