import "./Unauthorized.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useEffect, useRef, useState} from "react";

function encodeDefault(year) {
    const queryParams = {
        nocontrols: null,
        nosidebar: null,
        notimeline: null,
        student: null,
        nogeo: null,
        simple: null
    };

    const query = Object.keys(queryParams)
        .map(k => queryParams[k] !== null && queryParams[k] !== undefined ? encodeURIComponent(k) + '=' + encodeURIComponent(queryParams[k]) : encodeURIComponent(k))
        .join('&');
    const yearString = year < 0 ? Math.abs(year) + "BC" : year;

    return query + '#01/01/' + yearString + "&zoom=4";
}


export default function Unauthorized() {
    const iframeRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const encodedUrl = "https://runningreality.org/?" + encodeDefault(1700);
        const base64Url = btoa(encodedUrl);
        if (iframeRef.current) iframeRef.current.src = atob(base64Url);
    }, []);

    return (
        <div className={"Unauthorized"}>
            <Header/>
            <iframe
                id={"iframetest"}
                ref={iframeRef}
                width="100%" height="800"
                referrerPolicy="origin"
                onLoad={() => {
                    setTimeout(() => setIsLoading(false), 2000);
                }}>Running Reality
            </iframe>
            <Footer/>
            {isLoading && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 9999,
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    Loading...
                </div>
            )}
        </div>
    );
}