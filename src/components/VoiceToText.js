import { Box, Button } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import MicIcon from "@mui/icons-material/Mic";
import StopIcon from "@mui/icons-material/Stop";

const SpeechRecogition =
  window.SpeechRecogition || window.webkitSpeechRecognition;
const mic = new SpeechRecogition();
mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";
const VoiceToText = () => {
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
        setnote(transcript)
      console.log(transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  const handleSaveNote = () => {
    setsaveNotes([...saveNotes,note])
    setnote('')
  };

  return (
    <>
      <h1>Voice Notes</h1>
      <Container style={{ display: "flex" }}>
        <Box>
          <h2>Current Note</h2>
          {listen ? (
            <span>
              <MicIcon />
            </span>
          ) : (
            <span>
              <StopIcon />
              <MicIcon />
            </span>
          )}
          <Button onClick={handleSaveNote} disabled={!note}>
            Save Note
          </Button>
          <Button onClick={() => setlisten((prevState) => !prevState)}>
            Start/Stop
          </Button>
          <p>{note}</p>
        </Box>
        <Box>
          <h2>Notes</h2>
          {saveNotes.map((n) => (
            <p key={n}>{n}</p>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default VoiceToText;
