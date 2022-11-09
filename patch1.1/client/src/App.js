import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./components/home";
import State from "./components/state";
import Map from "./components/map";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Navigate to="/"/>}></Route>
        <Route path="/home/:state" element={<State />}></Route>
      </Routes>
      <Map />
    </BrowserRouter>
  );
};

export default App;
