import './LoadingScreen.css';
import { ReactComponent as Logo } from '../assets/logo_vector.svg';

function LoadingScreen({hiddenStatus}) {
    return (
        <div className={"loadingScreen " + hiddenStatus}>
            <Logo alt="Chronoguessr logo" />
            <div className="spinner"></div>
        </div>
    );
}

export default LoadingScreen;