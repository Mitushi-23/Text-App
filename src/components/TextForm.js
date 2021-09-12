import React, { useState } from "react";

import copy from "copy-to-clipboard";



export default function TextForm(props) {
  
  const ConvertToUp = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert(": Converted to Upper Case", "success");

  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const ConvertToLo = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert(": Converted to Lower Case", "success");

  };

  // const CopyText =()=>{
  //   var text = document.getElementById('box');
  //   text.select();
  //   document.execCommand(text.value); 
  //   props.showAlert(": Text copied to clipboard", "success");

  // } 


const CopyText =()=>{
  var text = document.getElementById('box');
  text.select();
  copy(text.value); 
} 
 const ExtraSpace=()=>{
   const newText = text.split(/[ ]+/);
   setText(newText.join(" "));
   props.showAlert(": Extra Space is removed", "success");

 }
  const Clear =()=>{
      const newText = "";
      setText(newText);
    props.showAlert(": Text is cleared", "success");

  }
  const [text, setText] = useState('');
//   const text1 = setText(text);

  return (
    <>
      <div className="container my-3" style ={{color: props.mode==='light' || props.mode==='blue-dark'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <textarea
          className="form-control my-3" id="box" style={{backgroundColor: props.mode==='light' || props.mode==='blue-dark'?'white':'#80808057', color: props.mode==='light' | props.mode==='blue-dark'?'black':'white'}}
          onChange={handleOnChange}
          value={text}
          rows="9"
          placeholder="Enter text here" 
        ></textarea>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={ConvertToUp}>
          ChangeToUpperCase
        </button>
        <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={ConvertToLo}>
          ChangeToLowerCase
        </button>
        <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={Clear}>
          Clear
        </button>

        <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={CopyText}>
          Copy Text
        </button>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={ExtraSpace}>
          Remove Extra Space
        </button>
        
      </div>

      <div className="container contain" style ={{color: props.mode==='dark' || props.mode==='blue-dark'?'white':'black' , backgroundColor: props.mode==='light'|| props.mode==='blue-light'?'rgb(226, 226, 198)':'rgb(9, 56, 115)'}}>
          <h2> <b> Your summary is here </b></h2>
          <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
          <p> {0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
          
          <h3><b> Preview</b> </h3>
          <p>{text}</p>
      </div>
    </>
  );
}
