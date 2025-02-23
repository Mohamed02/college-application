import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
const Application = lazy(() => import("./pages/Application"));
const Tutorial = lazy(() => import("./pages/Tutorial"));
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
