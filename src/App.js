import { BrowserRouter } from "react-router-dom";
import Login from "./components/logIn/Login";
import MainComponent from "./MainComponent";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
