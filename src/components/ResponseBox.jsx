import ActionButton from "./ActionButton";
import React from "react";
import "./ResponseBox.css";

export default function ResponseBox({cb}) {
    // a input box for the user to type their response
    // a submit button which calls the cb function with the response as an argument
    // the text from the input box should be checked before the cb - it should be
    // a number between -2000 and 3000

    // create a ref for the input box
    const respInputRef = React.createRef();

    function submit() {
        const response = parseInt(respInputRef.current.value);
        // get the value from the input box with ref
        if (response >= -2000 && response <= 3000) {
            cb(response);
        } else {
            alert("Invalid response. Please enter a number between -2000 and 3000.");
        }
    }

    return (
        <div className = {"responseBox"}>
            <input className = {"responseBoxInput"} type="text" ref={respInputRef} placeholder={"year"} />
            <ActionButton label={"SUBMIT"} call={()=>submit()}/>
        </div>
    )
}