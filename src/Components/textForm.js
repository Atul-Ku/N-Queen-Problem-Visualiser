import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleupClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handleloClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const handleclearClick = () => {
        let newtext = "";
        setText(newtext);
    }

    const handlecount = (event) => {
        let newtext = text.split("@").length;
        setText("The number of special character used in this text is:"+ (newtext-1));
    }

    const HandleonChange = (event) => {
        setText(event.target.value);
    }

    // const [text,setText]=useState("Enter a text"); 
    return (
        <>
            <div>
                <label>{props.heading}</label>
                <div className="mb-3">
                    <textarea className="form-control" style={{ color: "red" }} value={text} onChange={HandleonChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className='btn btn-success mx-3' onClick={handleupClick}>Convert to upperCase</button>
                <button className='btn btn-success mx-3' onClick={handleloClick}>Convert to lowerCase</button>
                <button className='btn btn-success mx-3' onClick={handleclearClick}>Clear text</button>
                <button className='btn btn-success mx-3' onClick={handlecount}>Count @</button>
            </div>
            <h1 className='my-3'>Your Text Summary</h1>
            <p><b>{text.split(" ").length}Words</b> and <b>{text.length}Characters.</b></p>
            <p>{0.008* text.split(" ").length} minutes you can take to read.</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </>
    )
}
