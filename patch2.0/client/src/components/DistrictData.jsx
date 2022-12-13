import { useEffect, useState} from "react";
import { useContext } from "react";
import { GlobalStoreContext } from "../store/store";
import Paper from '@mui/material/Paper';

function DistrictData() {
    const {store}  = useContext(GlobalStoreContext);
    const [data, setData] = useState({});

    useEffect(()=>{
        console.log(store);
        setData(store.DistrictData);
    },[store]);

    if(data){
        console.log("hello");
    return (
      <Paper
        id="MMD-paper"
        sx={{ display: "flex", flexDirection: "row" }}
        elevation={2}
      >
        <div id="MMD-paper-half1">
          <p>
            District: <br /> Compactness: <br />
            Representatives: <br />
          </p>
        </div>
        <div id="MMD-paper-half2">
          <p>
            White: <br />
            African-American: <br />
            Hispanic: <br />
            Asian: <br />
            <br />
            Total:
          </p>
        </div>
        <div id="MMD-paper-half3">
          <p>
            Democrat: <br />
            Republican: <br />
            District Split: <br />
            Majority Minority: <br />
          </p>
        </div>
      </Paper>
    );
    }else{
        <div></div>
    }
}

export default DistrictData;