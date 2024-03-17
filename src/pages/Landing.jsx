import Header from "../components/Header";
import "./Landing.css";
import ClockArt from "../assets/clock_art.png";
import Footer from "../components/Footer";
import {Link, useNavigate} from "react-router-dom";

function NavigationPanel(){
    const navigate = useNavigate();
    return (
        <nav>
            <ul><i>
                <li><span>CLASSIC</span></li>
                <li><span>BLITZ</span></li>
                <li><span>CASUAL</span></li>
                <hr/>
                <li><span onClick={()=>navigate("/tutorial")}>HOW TO PLAY</span></li>
                <li><span>LEADERBOARDS</span></li>
            </i></ul>
        </nav>
    );

}
export function Landing() {
    return (
        <div className={"Landing"}>
            <Header />
            <div className={"LandingContent"}>
                <NavigationPanel/>
                <img src={ClockArt} alt={"Clock Art"}/>
            </div>
            <Footer/>
        </div>
    );
}