import "./Button.css";
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom'


export default function ActionButton({label, link = null, type = null, call = null}) {
    const navigate = useNavigate();
    if (type === "submit")
        return (
            <button className={"ActionButton"} type={"submit"}>
                <i>{label}</i>
            </button>
        )
    if (link)
        return (
            <Link to={link} className={"ActionButton"}>
                <i>{label}</i>
            </Link>
        )
    if (call)
        return (
            <button className={"ActionButton"} onClick={() => call()}>
                <i>{label}</i>
            </button>
        )
}