import './Button.css';
import {useNavigate} from 'react-router-dom';

export default function SubscreenButton({text, link = null}) {
    const navigate = useNavigate();

    return (
        link ?
            <div className={"SubscreenButton"} onClick={() => navigate(link)}>
                &lt; <i>{text}</i>
            </div> :
            <div className={"SubscreenButton"} onClick={() => navigate(-1)}>
                &lt; <i>{text}</i>
            </div>
    );
}