import { useEffect, useState} from "react";
import { useContext } from "react";
import { GlobalStoreContext } from "../store/store";
import Paper from '@mui/material/Paper';

function DistrictData() {
    const {store}  = useContext(GlobalStoreContext);
    const [data, setData] = useState({});

    useEffect(()=>{
        setData(store.districtData);
    },[store]);

    console.log(data);
    if(data){
    return (
      <Paper
        id="MMD-paper"
        sx={{ display: "flex", flexDirection: "row" }}
        elevation={2}
      >
        <div id="MMD-paper-half1">
          <p>
            <h5>District: <h4>{data.District}</h4></h5>Compactness: {(data.Compactnes) ? Math.round(data.Compactnes * 1000) / 1000 : ""}<br />
            Representatives: {(data.Representa) ? data.Representa.replaceAll(" ", ", "): ""}<br />
          </p>
        </div>
        <div id="MMD-paper-half2">
          <p>
            White: {(data.WhitePop) ? data.WhitePop.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ","): ""}<br/>
            African-American: {(data.AfricanPop) ? data.AfricanPop.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ","): ""}<br />
            Hispanic: {(data.HispPop) ? data.HispPop.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ","): ""}<br />
            Asian: {(data.AsianPop) ? data.AsianPop.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ","): ""}<br />
            <br />
            Total: {(data.TotalPop) ? data.TotalPop.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ","): ""}
          </p>
        </div>
        <div id="MMD-paper-half3">
          <p>
            Democrat: {(data.DemVote) ? data.DemVote.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ","): ""}<br />
            Republican: {(data.RepVote) ? data.RepVote.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ","): ""}<br />
            District Split: {(data.DistrictDR) ? data.DistrictDR.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ","): ""}<br />
            Majority Minority: {(data.MajorMin) ? data.MajorMin.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ","): ""}<br />
          </p>
        </div>
      </Paper>
    );
    }else{
        <div></div>
    }
}

export default DistrictData;