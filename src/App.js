// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="Portfolio" />
      <TextForm heading="Enter the text below" />
    </>
  );
}

export default App;
