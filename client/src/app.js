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
                <Home state={state}/>
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
        <div
        style={{
          width: "55%",
          height: "100%",
          right: 0,
          position: "fixed",
          backgroundColor: "#E8F4F8",
        }}
      >
          <MapContainer
          style={{ height: "93.5vh" }}
          center={[40, -95]}
          zoom={4}
          // zoomSnap={4.5}
          scrollWheelZoom={false}
          zoomControl={false}
        >
          {/* <h1
            style={{
              position: "relative",
              left: "34%",
              top: "15%",
              fontSize: "45px",
              fontFamily: "Patrick Hand SC",
              letterSpacing: "1.5px",
            }}
          >

            
          </h1> */}
          <Map handleClick={handleClick} state={state}/>
        </MapContainer>
      </div>
        
    </div>)
}

export default App;