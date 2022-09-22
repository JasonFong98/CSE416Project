import React, {useState} from "react";
import {MapContainer} from "react-leaflet";
import Florida from './states/florida';
import Ohio from './states/ohio';
import NorthCarolina from './states/northcarolina';
import Home from './home.js'
import Map from './Map.js'


const App = (props) =>{
    const handleClick=(state)=>{
        setState(state);
    }

    const handleHome = () =>{
        setState("home");
    }

    const [state, setState] = useState("home");
    const [map,setMap]=useState(null);
    let render;
    if(state==="home"){
        render=<div>
                <Home handleClick = {handleClick} state={state}/>
            </div> ;
    }else if(state === "Florida"){
       render=<div><Florida handleHome={handleHome} /></div>;
    }else if(state === "Ohio"){
        render=<div><Ohio handleHome = {handleHome}/></div>;
    }else if(state === "North Carolina"){
        render=<div><NorthCarolina handleHome = {handleHome}/></div>;
    }
    return(<div>
        {render}
    </div>)
}

export default App;