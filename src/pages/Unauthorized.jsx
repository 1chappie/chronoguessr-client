import "./Unauthorized.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useEffect, useRef, useState} from "react";


export default function Unauthorized() {
    return (
        <div className={"Unauthorized"}>
            <Header/>
        </div>
    );
}