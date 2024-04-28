import './App.css';
import React from 'react';
import {Landing} from "./pages/Landing";
import {Route, Routes} from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import HowTo from "./pages/HowTo";
import RequireAuth from "./components/overhead/RequireAuth";
import Layout from "./components/overhead/Layout";
import Profile from "./pages/Profile";
import PersistLogin from "./components/overhead/PersistLogin";
import Unauthorized from "./pages/Unauthorized";

/*TODO ADD LOCAL FONT FUTURA*/

function App() {
    return (
        <main className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>

                    {/*public*/}
                    <Route path="login" element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="tutorial" element={<HowTo/>}/>
                    <Route path="unauthorized" element={<Unauthorized/>}/>

                    <Route element={<PersistLogin/>}>
                        {/*also public but dynamic*/}
                        <Route path="/" element={<Landing/>}/>

                        {/*protected*/}
                        <Route element={<RequireAuth elevation={"user"}/>}>
                            <Route path="/profile" element={<Profile/>}/>
                            {/*<Route path="/game" element={<Game/>}/>*/}
                        </Route>
                        <Route element={<RequireAuth elevation={"admin"}/>}>
                        </Route>
                    </Route>

                    {/*404*/}
                    <Route path="*" element={<h1>Not Found</h1>}/>

                </Route>
            </Routes>
        </main>
    );
}

export default App;
