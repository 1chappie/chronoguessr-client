import "./Button.css";
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom'


export default function ActionButton({text, location = null, type="button"}) {
    const navigate = useNavigate()
    return (
        location ?
        <Link to={location} className={"ActionButton"} type={type}>
            <i>{text}</i>
        </Link> :
        <button onClick={() => navigate(location)} className={"ActionButton"} type={type}>
            <i>{text}</i>
        </button>
    );
}