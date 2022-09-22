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
    const [state, setState] = useState("home");
    const [map,setMap]=useState(null);
    let render;
    if(state==="home"){
        render=<div>
                <Home handleClick = {handleClick} state={state}/>
            </div> ;
    }else if(state === "Florida"){
       render=<div><Florida/></div>;
    }else if(state === "Ohio"){
        render=<div><Ohio /></div>;
    }else if(state === "North Carolina"){
        render=<div><NorthCarolina /></div>;
    }
    return(<div>
        {render}
    </div>)
}

export default App;