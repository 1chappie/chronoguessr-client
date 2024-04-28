import './Button.css';
import {useNavigate} from 'react-router-dom';

export default function SubscreenButton({label, link = null}) {
    const navigate = useNavigate();

    return (
        link ?
            <div className={"SubscreenButton"} onClick={() => navigate(link)}>
                &lt; <i>{label}</i>
            </div> :
            <div className={"SubscreenButton"} onClick={() => navigate(-1)}>
                &lt; <i>{label}</i>
            </div>
    );
}