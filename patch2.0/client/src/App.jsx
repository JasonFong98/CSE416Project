import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import State from "./components/state";
import PageLayout from "./layout/pagelayout";
import { GlobalStoreContextProvider } from "./store/store";

function App() {
  return (
    <GlobalStoreContextProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path=":id" element={<State />} />
        </Route>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </GlobalStoreContextProvider>
  );
}

export default App;
