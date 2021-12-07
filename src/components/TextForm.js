import React, { useState } from "react";

import copy from "copy-to-clipboard";

export default function TextForm(props) {
  const ConvertToUp = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert(": Converted to Upper Case", "success");
  };
let txt;
  const handleOnChange = (event) => {
  setText(event.target.value);
  txt = event.target.value;
  console.log(txt);
  };

  const ConvertToLo = () => {
    const newText = text.toLowerCase();
    // console.log(txt);
    setText(newText);
    props.showAlert(": Converted to Lower Case", "success");
  };

  // const CopyText =()=>{
  //   var text = document.getElementById('box');
  //   text.select();
  //   document.execCommand(text.value);
  //   props.showAlert(": Text copied to clipboard", "success");

  // }

  const CopyText = () => {
    var text = document.getElementById("box");
    text.select();
    copy(text.value);
    // document.getSelection().removeAllRange();
  };
  const ExtraSpace = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(": Extra Space is removed", "success");
  };

  const Capitalize = () => {
    let newText = text.split(/[.]+/);
    let string;
    let newstr = "";
    console.log(newText.length);
    if(newText.length >1)
    {
    for (let i = 0; i < newText.length-1; i++) {
      newText[i] = newText[i].trim();
      if (newText[i][0] !== "") {
        const str = newText[i];
        string = str[0].toUpperCase() + str.slice(1);
        newstr += string + ". ";
      }
    }
    console.log(newText[newText.length-1]);
    newText[newText.length-1] = newText[newText.length-1].trim();
    if(newText[newText.length-1]!=="")
    {
    newstr += newText[newText.length-1][0].toUpperCase() + newText[newText.length-1].slice(1);
    }
    setText(newstr);
    props.showAlert(": Text is Capitalized", "success");
  }
  else
  {
    newstr=newText[0][0].toUpperCase()+ newText[0].slice(1);
    setText(newstr);
    props.showAlert(": Text is Capitalized", "success");
    // props.showAlert(": No full stop!", "danger");
  }
  };
  const Clear = () => {
    const newText = "";
    setText(newText);
    props.showAlert(": Text is cleared", "success");
  };

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('box').value],    
                {type: 'text/plain;charset=utf-8'});
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  }


  const [text, setText] = useState("");
  //   const text1 = setText(text);

  return (
    <>
      <div
        className="container my-3"
        style={{
          color:
            props.mode === "light" || props.mode === "blue-dark"
              ? "black"
              : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control my-3"
          id="box"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#80808057",
            color:
              props.mode === "light" || props.mode === "blue-dark"
                ? "black"
                : "white",
          }}
          onChange={handleOnChange}
          value={text}
          rows="9"
          placeholder="Enter text here"
        ></textarea>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          style={{
            color:
              props.mode === "light" || props.mode === "blue-dark"
                ? "black"
                : "white",
          }}
          onClick={ConvertToUp}
        >
          ChangeToUpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          style={{
            color:
              props.mode === "light" || props.mode === "blue-dark"
                ? "black"
                : "white",
          }}
          onClick={ConvertToLo}
        >
          ChangeToLowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          style={{
            color:
              props.mode === "light" || props.mode === "blue-dark"
                ? "black"
                : "white",
          }}
          onClick={Clear}
        >
          Clear
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          style={{
            color:
              props.mode === "light" || props.mode === "blue-dark"
                ? "black"
                : "white",
          }}
          onClick={CopyText}
        >
          Copy Text
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          style={{
            color:
              props.mode === "light" || props.mode === "blue-dark"
                ? "black"
                : "white",
          }}
          onClick={ExtraSpace}
        >
          Remove Extra Space
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          style={{
            color:
              props.mode === "light" || props.mode === "blue-dark"
                ? "black"
                : "white",
          }}
          onClick={Capitalize}
        >
          Capitalize
        </button>
        <button disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          style={{
            color:
              props.mode === "light" || props.mode === "blue-dark"
                ? "black"
                : "white",
          }} onClick={downloadTxtFile}>Download Text</button>
      </div>

      <div
        className="container contain"
        style={{
          color:
            props.mode === "dark" || props.mode === "blue-dark"
              ? "white"
              : "black",
          backgroundColor:
            props.mode === "light" || props.mode === "blue-light"
              ? "rgb(226, 226, 198)"
              : "rgb(9, 56, 115)",
        }}
      >
        <h2>
          {" "}
          <b> Your summary is here </b>
        </h2>
        <p>
          {" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {" "}
          {0.08 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes read
        </p>

        <h3>
          <b> Preview</b>{" "}
        </h3>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
