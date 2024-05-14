import './ErrorScreen.css';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo_vector.svg';

function ErrorScreen({ message }) {
    const navigate = useNavigate();

    return (
        <div className="errorScreen">
            <Logo alt="Chronoguessr logo" />
            <p>{message}</p>
            <button onClick={() => navigate('/')}>Go Home</button>
        </div>
    );
}

export default ErrorScreen;