import './Popups.css';
import ActionButton from "./ActionButton";

function FinalPopup({ finalScore, roundCount, onPlayAgain, onHome }) {
    return (
        <div className={"Popup"}>
            <p><i>CONGRATS!</i></p>
            <p>Final score: {finalScore}</p>
            <p>Total rounds: {roundCount}</p>
            <ActionButton label={"PLAY AGAIN"} call={onPlayAgain}/>
            <ActionButton label={"HOME"} call={onHome}/>
        </div>
    );
}

export default FinalPopup;