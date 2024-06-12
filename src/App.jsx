import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Router } from "./router";
import "./styles.css"

function App() {
  return (
    <>
      <BrowserRouter>
       <Header />
        <div className="app">
          <Router/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
