import './Button.css';
import {useNavigate} from 'react-router-dom';

export default function SubscreenButton({label, link = null, onclick = null}) {
    const navigate = useNavigate();

    return (
        <div className={"SubscreenButton"} onClick={() => {
            if (link) {
                navigate(link);
            } else if (onclick) {
                onclick();
            } else {
                navigate(-1);
            }
        }}>
            &lt; <i>{label}</i>
        </div>
    );
}