// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import React, { useState } from 'react'

function App() {

  const [alert, setalert] = useState(null);
  const showAlert = (message, type) =>
    setalert({
      msg: message,
      type: type
    })
  setTimeout(() => {
    setalert(null);
  }, 1500);

  const [mode, setmode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#242326db';
      showAlert(": Dark mode is enabled", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(": Light mode is enabled", "success");

    }
  }


  return (
    <>
      <Navbar title="TextApp" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter the text below" mode={mode} />
    </>
  );
}

export default App;
