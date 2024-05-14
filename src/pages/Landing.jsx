import Header from "../components/Header";
import "./Landing.css";
import ClockArt from "../assets/clock_art.png";
import Footer from "../components/Footer";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

function NavigationPanel() {
    const navigate = useNavigate();
    const {auth} = useContext(AuthContext);
    return (
        <nav>
            <ul><i>
                <li><span onClick={() => navigate("/classic-session")}>CLASSIC</span></li>
                <li><span onClick={() => navigate("/wip")}>BLITZ</span></li>
                <li><span onClick={() => navigate("/wip")}>CASUAL</span></li>
                <hr/>
                <li><span onClick={() => navigate("/tutorial")}>HOW TO PLAY</span></li>
                <li><span>LEADERBOARDS</span></li>
            </i></ul>
        </nav>
    );

}

export function Landing() {
    return (
        <div className={"Landing"}>
            <Header/>
            <div className={"LandingContent"}>
                <NavigationPanel/>
                <img src={ClockArt} alt={"Clock Art"}/>
            </div>
            <Footer/>
        </div>
    );
}