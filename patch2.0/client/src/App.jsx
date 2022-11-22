import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import State from "./components/state";
import PageLayout from "./layout/pagelayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path=":id" element={<State />} />
      </Route>
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default App;
