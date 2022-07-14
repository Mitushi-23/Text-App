import { Box } from "@mui/material";
// import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import MicIcon from "@mui/icons-material/Mic";
import StopIcon from "@mui/icons-material/Stop";
import { forwardRef, useRef } from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import copy from "copy-to-clipboard";
import { Button, ButtonGroup, Card, ListGroup } from "react-bootstrap";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import Radium, { StyleRoot } from "radium";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import TextDecreaseIcon from "@mui/icons-material/TextDecrease";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import { Tooltip } from "@mui/material";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import MicOffIcon from "@mui/icons-material/MicOff";

const ComponentToPrint = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      style={{
        padding: "10px",
        fontWeight: "500",
        // color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <p
        style={{
          fontWeight: props.fontWeight ? "800" : "500",
          fontSize: `${props.fontSize}px`,
          padding: "10px",
          textAlign: `${props.textAlign}`,
          fontStyle: props.fontStyle && "italic",
          textDecoration: props.textDecoration && "underline",
          color: `${props.color}`,
        }}
      >
        {props.text.length > 0 ? props.text :  "Nothing to preview!"}
      </p>
    </div>
  );
});

const SpeechRecogition =
  window.SpeechRecogition || window.webkitSpeechRecognition;
const mic = new SpeechRecogition();
mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

function TextForm(props) {
  /** Voice to text */
  const [listen, setlisten] = useState(false);
  const [note, setnote] = useState(null);
  const [saveNotes, setsaveNotes] = useState([]);

  useEffect(() => {
    handleListen();
  }, [listen]);

  const handleListen = () => {
    if (listen) {
      mic.start();
      mic.onend = () => {
        console.log("continue");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("stopped");
      };
    }
    mic.onstart = () => {
      console.log("Mic on");
    };
    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      setnote(transcript);
      console.log(transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  const handleSaveNote = () => {
    setsaveNotes([...saveNotes, note]);
    setnote("");
    
  };
  
let newNote="";
  {saveNotes.map(n=>{
    newNote+=n+'\n';
  })}
  /** -------------------------------------------- */

  const [textAlign, settextAlign] = useState("start");
  const [fontSize, setfontSize] = useState(16);
  const [fontWeight, setfontWeight] = useState(false);
  const [fontStyle, setfontStyle] = useState(false);
  const [textDecoration, settextDecoration] = useState(false);
  const [color, setColor] = useColor("hex", "#121212");
  const [pallete, setpallete] = React.useState("#0000");

  const ref = useRef();
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
    if (newText.length > 1) {
      for (let i = 0; i < newText.length - 1; i++) {
        newText[i] = newText[i].trim();
        if (newText[i][0] !== "") {
          const str = newText[i];
          string = str[0].toUpperCase() + str.slice(1);
          newstr += string + ". ";
        }
      }
      console.log(newText[newText.length - 1]);
      newText[newText.length - 1] = newText[newText.length - 1].trim();
      if (newText[newText.length - 1] !== "") {
        newstr +=
          newText[newText.length - 1][0].toUpperCase() +
          newText[newText.length - 1].slice(1);
      }
      setText(newstr);
      props.showAlert(": Text is Capitalized", "success");
    } else {
      newstr = newText[0][0].toUpperCase() + newText[0].slice(1);
      setText(newstr);
      props.showAlert(": Text is Capitalized", "success");
      // props.showAlert(": No full stop!", "danger");
    }
  };
  const Clear = () => {
    const newText = "";
    setText(newText);
    setsaveNotes([])
    // newNote="";
    props.showAlert(": Text is cleared", "success");
  };

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("box").value], {
      type: "text/plain;charset=utf-8",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  };

  const [text, setText] = useState("");
  //   const text1 = setText(text);

  return (
    <>
      <StyleRoot>
        <ButtonGroup
          aria-label="Basic example"
          style={{
            "@media (max-width:1770px)": {
              width: "80%",
              display: "none",
              margin: "auto",
            },
            display: "flex",
            margin: "auto",
            width: "50%",
          }}
        >
          <button
            type="button"
            class="btn btn-light"
            onClick={() => settextAlign("center")}
          >
            <FormatAlignCenterIcon />
          </button>
          <button
            type="button"
            class="btn btn-light"
            onClick={() => settextAlign("start")}
          >
            <FormatAlignLeftIcon />
          </button>
          <button
            type="button"
            class="btn btn-light"
            onClick={() => settextAlign("end")}
          >
            <FormatAlignRightIcon />
          </button>
          <button
            type="button"
            class="btn btn-light"
            onClick={() => settextAlign("justify")}
          >
            <FormatAlignJustifyIcon />
          </button>
          <button
            type="button"
            class="btn btn-light"
            onClick={() => setfontWeight(!fontWeight)}
          >
            <FormatBoldIcon />
          </button>
          <button
            type="button"
            class="btn btn-light"
            onClick={() => setfontStyle(!fontStyle)}
          >
            <FormatItalicIcon />
          </button>
          <button
            type="button"
            class="btn btn-light"
            onClick={() => settextDecoration(!textDecoration)}
          >
            <FormatUnderlinedIcon />
          </button>
          <button
            type="button"
            class="btn btn-light"
            onClick={() => setfontSize(fontSize - 2)}
          >
            <TextDecreaseIcon />
          </button>
          <button
            type="button"
            class="btn btn-light"
            onClick={() => setfontSize(fontSize + 2)}
          >
            <TextIncreaseIcon />
          </button>
          <button type="button" class="btn btn-light">
            <input
              type="color"
              name="favcolor"
              onChange={(e) => {
                setColor(e.target.value);
                setpallete(e.target.value);
              }}
            />
          </button>

          <button type="button" class="btn btn-light" onClick={ConvertToUp}>
            ABC
          </button>
          <button type="button" class="btn btn-light" onClick={ConvertToLo}>
            abc
          </button>
          <button type="button" class="btn btn-light" onClick={Capitalize}>
            Capitalize
          </button>
          <button type="button" class="btn btn-light" onClick={ExtraSpace}>
            RemoveExtraSpace
          </button>
        </ButtonGroup>
        <br />
        <br />
        <div
          className="mx-4 my-3"
          style={{
            color:
              props.mode === "light" || props.mode === "blue-dark"
                ? "black"
                : "white",
          }}
        >
          <div
            className="contain"
            style={{
              display: "flex",
              "@media (max-width: 1100px)": {
                flexDirection: "column",
                justifyContent: "center",
              },
            }}
          >
            <div
              style={{
                "@media (max-width: 1100px)": {
                  width: "80%",
                  margin: "auto",
                },
                width: "35%",
              }}
            >
              <h2 style={{ fontFamily: "var(--play)", fontWeight: "700" }}>
                {props.heading}
                &nbsp; &nbsp;
                <Tooltip title="Copy" arrow placement="top">
                  <ContentCopyRoundedIcon
                    onClick={CopyText}
                    style={{ cursor: "pointer" }}
                  />
                </Tooltip>
                &nbsp; &nbsp;
                <Tooltip title="Clear All" arrow placement="top">
                  <ClearAllIcon style={{ cursor: "pointer" }} onClick={Clear} />
                </Tooltip>
              </h2>
              <textarea
                className="form-control my-3"
                id="box"
                style={{
                  backgroundColor:
                    props.mode === "light" ? "white" : "#80808057",
                  color:
                    props.mode === "light" || props.mode === "blue-dark"
                      ? "black"
                      : "white",
                }}
                onChange={handleOnChange}
                value={text}
                rows="9"
                // column="4"
                placeholder="Enter text here"
              ></textarea>
              {listen ? (
                <span>
                  <MicIcon />
                </span>
              ) : (
                <span>
                  {/* <StopIcon /> */}
                  <MicOffIcon />
                </span>
              )}
              &nbsp; &nbsp;
              <Button onClick={handleSaveNote} disabled={!note}>
                Save Note
              </Button>
              &nbsp; &nbsp;
              <Button onClick={() => setlisten((prevState) => !prevState)}>
                {listen ? <span>Stop</span> : <span>Start</span>}
              </Button>
              {/* &nbsp; &nbsp;
                <Tooltip title="Clear All" arrow placement="top">
                  <ClearAllIcon style={{ cursor: "pointer" }} onClick={()=> newNote=""} />
                </Tooltip> */}
              <hr />
              <p>{note}</p>
            </div>
            <div
              style={{
                width: "35%",
                "@media (max-width: 1100px)": {
                  width: "80%",
                  margin: "auto",
                },
                margin: "0% 4%",
              }}
            >
              <h3>
                <b> Preview</b> &nbsp; &nbsp;
                <ReactToPrint content={() => ref.current}>
                  <PrintContextConsumer>
                    {({ handlePrint }) => (
                      <Tooltip title="Print" arrow placement="top">
                        <LocalPrintshopIcon
                          onClick={handlePrint}
                          style={{ cursor: "pointer" }}
                        />
                      </Tooltip>
                    )}
                  </PrintContextConsumer>
                </ReactToPrint>
              </h3>
              <hr />
              {/* <ComponentToPrint
                ref={ref}
                text={text+'/n'+n}
                textAlign={textAlign}
                fontWeight={fontWeight}
                fontSize={fontSize}
                fontStyle={fontStyle}
                textDecoration={textDecoration}
                color={color}
              /> */}
              {/* <hr /> */}

              {/* {saveNotes.map((n) => (
                <p>{n}</p>
                ))} */}
                <ComponentToPrint
                  ref={ref}
                  text={text+'\n'+newNote+'\n'}
                  textAlign={textAlign}
                  fontWeight={fontWeight}
                  fontSize={fontSize}
                  fontStyle={fontStyle}
                  textDecoration={textDecoration}
                  color={color}
                />
            </div>
            <div
              // className="container contain"
              style={{
                width: "15%",
                marginTop: "2%",
                "@media (max-width: 1100px)": {
                  width: "80%",
                  margin: "auto",
                },
                height: "200px",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              <Card style={{ width: "auto" }}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Words: &nbsp;
                    {
                      text.split(/\s+/).filter((element) => {
                        return element.length !== 0;
                      }).length
                    }{" "}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Characters: &nbsp; {text.length}{" "}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Minutes Read: &nbsp;{" "}
                    {0.08 *
                      text.split(" ").filter((element) => {
                        return element.length !== 0;
                      }).length}{" "}
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
          </div>
          {/* <div>
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
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-1"
            style={{
              color:
                props.mode === "light" || props.mode === "blue-dark"
                  ? "black"
                  : "white",
            }}
            onClick={downloadTxtFile}
          >
            Download Text
          </button>
        </div> */}
        </div>
      </StyleRoot>
    </>
  );
}

export default Radium(TextForm);
