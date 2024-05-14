import {useState, useEffect} from 'react';
import ResponseBox from "../components/ResponseBox";
import Popup from '../components/SessionProgressPopoup';
import FinalPopup from '../components/SessionFinalPopup';
import LoadingScreen from '../components/LoadingScreen';
import ErrorScreen from '../pages/ErrorScreen';
import './ClassicSession.css';
import {useNavigate} from 'react-router-dom';
import useAxiosProtected from '../hooks/useAxiosProtected';
import SubscreenButton from "../components/SubscreenButton";

import {ReactComponent as Logo} from '../assets/logo_vector.svg';


export default function ClassicSession() {
    const navigate = useNavigate();
    const axiosProtected = useAxiosProtected();

    const [gameState, setGameState] = useState(null);
    const [prevGameState, setPrevGameState] = useState(null);
    const [rrLink, setRrLink] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const [showFinalPopup, setShowFinalPopup] = useState(false);
    const [error, setError] = useState(null);

    function initializeGame() {
        return axiosProtected.get('/game/session/classic')
            .then(response => {
                setGameState(response.data);
                setRrLink(response.data.round.rrLink);
            })
            .catch(error => {
                setError(error.response.data);
            });
    }

    useEffect(() => {
        if (!gameState) {
            console.log("in here");
            setIsLoading(true);
            initializeGame().then(() => {
                setTimeout(() => {
                    console.log("called");
                    setIsLoading(false);
                }, 8000);
            });
        }
    }, []);

    function submit(response) {
        axiosProtected.post(`/game/session/${gameState.id}`, {answer: response})
            .then(response => {
                setPrevGameState(gameState);
                setGameState(response.data);
                setShowPopup(true);

                if (!response.data.inProgress) {
                    setShowFinalPopup(true);
                }
            })
            .catch(error => {
                setError(error.response.data);
            });
    }

    function next() {
        setShowPopup(false);
        setRrLink(gameState.round.rrLink);
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }


    function playAgain() {
        setShowFinalPopup(false);
        setShowPopup(false);
        setIsLoading(true);

        initializeGame().then(() => {
            setTimeout(() => {
                setIsLoading(false);
            }, 10000);
        });
    }

    async function leave() {
        await axiosProtected.post(`/game/session/${gameState.id}/abort`);
        navigate('/');
    }

    function home() {
        navigate('/');
    }

    if (error) {
        return <ErrorScreen message={error.message}/>;
    }

    return (
        <main className={"sessionContainer"}>
            <header className="sessionHeader">
                <Logo alt="Chronoguessr logo"/>
                <div className="sessionHeaderButtons">
                    <SubscreenButton label="CLASSIC SESSION" onclick={leave}/>
                    <div className="roundCounter">ROUND {gameState ? gameState.roundCount : 0}</div>
                </div>
            </header>
            <iframe key={'kf'} src={rrLink} className="iframe"/>
            <ResponseBox key={gameState ? gameState.roundCount : 0} cb={submit} className="responseBox"/>
            <LoadingScreen hiddenStatus={isLoading ? 'visible' : 'hidden'}/>
            {showPopup && (<>
                    <div className="overlay"></div>
                    <Popup
                        roundCount={prevGameState ? prevGameState.roundCount : 0}
                        correctResponse={prevGameState ? prevGameState.round.response : ''}
                        onNext={next}
                    />
                </>
            )
            }
            {
                showFinalPopup && (<>
                        <div className="overlay"></div>
                        <FinalPopup
                            finalScore={gameState ? gameState.finalScore : 0}
                            roundCount={gameState ? gameState.roundCount : 0}
                            onPlayAgain={playAgain}
                            onHome={home}
                        />
                    </>
                )
            }
        </main>
    )
        ;
}