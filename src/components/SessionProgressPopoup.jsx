import './Popups.css';
import ActionButton from "./ActionButton";

function ProgressPopup({ roundCount, correctResponse, onNext }) {
    return (
        <div className={"Popup"}>
            <p><i>ROUND {roundCount}</i></p>
            <p>Correct response: {correctResponse}</p>
            <ActionButton label={"NEXT"} call={onNext}/>
            {/*<button onClick={onNext}>Next</button>*/}
        </div>
    );
}

export default ProgressPopup;