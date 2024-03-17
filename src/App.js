import './App.css';
import React from 'react';
import {Landing} from "./pages/Landing";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./pages/Login";
import {UserContext} from './UserContext';
import Register from "./pages/Register";
import HowTo from "./pages/HowTo";

/*TODO ADD LOCAL FONT FUTURA*/

function App() {
    const [user, setUser] = React.useState(null);
    return (
        <UserContext.Provider value={{user, setUser}}>
            <div className="App">
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Landing/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/tutorial" element={<HowTo/>}/>
                    </Routes>
                </Router>
            </div>
        </UserContext.Provider>
    );
}

export default App;
