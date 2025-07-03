import React from "react";

function TextInput({text, setInputText}) {

    const inputText = (event) => {
        setInputText(event.target.value)
    }
    return(
        <>
            <textarea 
                rows="6" 
                cols="50"
                value={text}
                onChange={inputText}
            />
        </>
    )
}

export default TextInput;