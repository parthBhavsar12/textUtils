import React, {useState} from 'react'

const myStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
};

export default function Container(props){
    const [text, setText] = useState('');
    
    const handleUpCase = ()=>{
        setText(text.toUpperCase());
        props.showToast("Converted into Uppercase","success");
    }
    const handleLowCase = ()=>{
        setText(text.toLowerCase());
        props.showToast("Converted into Lowercase","success");
    }
    const handleCopy = ()=>{
        var text = document.getElementById("txtInput");
        navigator.clipboard.writeText(text.value);
        props.showToast("Copied to Clipboard","success");
    }
    const handleRemoveExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showToast("Removed extra spaces","success");
    }
    const handleClear = ()=>{
        setText('');
        props.showToast("Cleared text","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    return(
        <>
            <div className="container">
                <div className="mb-3">
                    <h4 htmlFor="txtInput" className="form-label my-3">Enter Text:</h4>
                    <textarea className="form-control" id="txtInput" rows="7" value={text} onChange={handleOnChange}></textarea>
                </div>
            </div>
            <div className="container" style={myStyle}>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleUpCase}>Convert to Uppercase</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleLowCase}>Convert to Lowercase</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleRemoveExtraSpace}>Remove Extra Spaces</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h4>Text Summary:</h4>
                <ul className="list-group list-group-horizontal-sm">
                    <li className="list-group-item">Word Count: {(text.length===0)?0:text.split(' ').length}</li>
                    <li className="list-group-item">Character Count: {text.length}</li>
                </ul>
            </div>
            <div className="accordion container" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Preview Text:
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {(text.length===0)?'Text is Empty!':text}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}