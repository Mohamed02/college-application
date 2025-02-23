import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Application from "./pages/Application";
import Tutorial from "./pages/Tutorial";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/application" element={<Application />} />
        <Route path="/tutorial" element={<Tutorial />} />
      </Route>
    </Routes>
  );
}

export default App;
