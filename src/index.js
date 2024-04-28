import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AuthProvider} from "./context/AuthContext";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {disableReactDevTools} from "@fvilers/disable-react-devtools";

if(process.env.REACT_APP_NODE_ENV === 'production'){
    disableReactDevTools();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path="/*" element={<App/>}/>
            </Routes>
        </AuthProvider>
    </BrowserRouter>
);