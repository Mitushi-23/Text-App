// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Radium, { StyleRoot } from 'radium';


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
      document.title = "TextApp - Dark";
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(": Light mode is enabled", "success");
      document.title = "TextApp - Light";
    }
  }

  const toggleModeBlue = () => {
    if (mode === 'blue-light' || mode === 'light' || mode ==='dark') {
      setmode('blue-dark');
      document.body.style.backgroundColor = '#0dcaf0';
      showAlert(": Light Blue mode is enabled", "success");
      document.title = "TextApp - Blue Light";
    }
    else {
       if(mode==='blue-dark'|| mode === 'light' || mode ==='dark');
       setmode('blue-light')
      document.body.style.backgroundColor = '#6f42c1';
      showAlert(": Dark Blue mode is enabled", "success");
      document.title = "TextApp - Blue Dark";
    }
  }

  
  return (
    <>
    <StyleRoot>

    <Router>
      <Navbar title="TextApp" mode={mode} toggleMode={toggleMode} toggleModeBlue = {toggleModeBlue} />
      <Alert alert={alert} />
      <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text below" mode={mode} />
          </Route>
        </Switch>
  </Router>
    </StyleRoot>
    </>
  );
}

export default Radium(App);
