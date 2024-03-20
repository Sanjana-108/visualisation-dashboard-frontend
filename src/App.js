import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import Nopage from "./pages/Nopage";
import Page from "./components/Layout/Page";
import { startTransition } from "react";

function App() {
  return (
    <>
     
        <Routes>
          <Route path="/" element={<Page />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/*" element={<Nopage />} />
        </Routes>
     
    </>
  );
}

export default App;