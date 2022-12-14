import { useEffect, useState} from "react";
import { useContext } from "react";
import { GlobalStoreContext } from "../store/store";
import Paper from '@mui/material/Paper';

function DistrictData() {
    const {store}  = useContext(GlobalStoreContext);
    const [data, setData] = useState(null);

    useEffect(()=>{
        setData(store.districtData);
    },[store.districtData]);

    if(data){
    return (
      <Paper
        id="MMD-paper"
        sx={{ display: "flex", flexDirection: "row" }}
        elevation={2}
      >
        <div id="MMD-paper-half1">
          <p>
            <h5><b>District:</b> <h4><b>{(data.District) ? data.District: ((data.NAME) ? data.NAME : "")}</b></h4></h5>Compactness: {(data.Compactness) ? Math.round(data.Compactness * 1000) / 1000 : ""}<br />
            Representatives: {(data.Representatives) ? data.Representatives.replaceAll(" ", ", "): ""}<br />
          </p>
        </div>
        <div id="MMD-paper-half2">
          <p>
            White: {(data.WhitePop) ? (Math.ceil(data.WhitePop)).toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ","): ""}<br/>
            African-American: {(data.AfricanPop) ? Math.ceil(data.AfricanPop).toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ","): ""}<br />
            Hispanic: {(data.HispPop) ? Math.ceil(data.HispPop).toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ","): ""}<br />
            Asian: {(data.AsianPop) ? Math.ceil(data.AsianPop).toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ","): ""}<br />
            <br />
            Total: {(data.TotalPop) ? Math.ceil(data.TotalPop).toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ","): ""}
          </p>
        </div>
        <div id="MMD-paper-half3">
          <p>
            Democrat: {(data.DemVote) ? data.DemVote.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "  ("+ Math.round(data.DemPercent*100)+"%)": ""}<br />
            Republican: {(data.RepVote) ? data.RepVote.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "  ("+ Math.round(data.RepPercent*100)+"%)": ""}<br />
            District Split: {(data.DistrictDRSplit) ? data.DistrictDRSplit.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " (D,R)": ""}<br />
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