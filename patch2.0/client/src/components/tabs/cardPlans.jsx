import React, {useEffect, useContext, useState} from 'react';
import Paper from "@mui/material/Paper";
import { GlobalStoreContext } from "../../store/store";
import apis from '../../api/api';

function CardPlans(props) {
    const {store}  = useContext(GlobalStoreContext);
    const stateDict =  {"Ohio": "OH", "Virginia": "VA", "North Carolina": "NC"}
    const [info, setInfo] = useState();

    useEffect(()=>{
        store.setStateMap(props.value);
        if(props.value == "smdExRep"){
            apis.getSMDExtremeRep(stateDict[props.state.state]).then((res)=>{
                setInfo(res.data.features);
            });
        }else if(props.value == "smdExDem"){
            apis.getSMDExtremeDem(stateDict[props.state.state]).then((res)=>{
                setInfo(res.data.features);
            });
        }else if(props.value == "smdRand"){
            apis.getSMDRandomPlan(stateDict[props.state.state], 1).then((res)=>{
                setInfo(res.data.features);
            });
        }
    },[props.value]);

    console.log(info);
    if(props.value==""){
        return(<div></div>)
    }
    if(info){
        return (
            <div>
                <Paper id="plan-summary" elevation={4}>
                    <div className="flex-container">
                        <div id="paper-fourths">
                            <h4>Number of District:</h4>
                            <h2>{info.length}</h2>
                        </div>
                        
                        <div id = "paper-fourths">
                            <h4>Opportunity Districts:</h4>
                            <h2>{info[0].properties.MajorMin}</h2>
                        </div>

                        <div id = "paper-fourths">
                            <h4>State Dem/Rep Split:</h4>
                            <h2>{info[0].properties.DRSplit}</h2>
                        </div>

                        <div id = "paper-fourths">
                            <h4>Safe <br/>Districts:</h4>
                            <h2>{info[0].properties.RepSave+info[0].properties.DemSave}</h2>
                        </div>
                    </div>

                </Paper>
                <br/>
                <Paper id="district-table" elevation={2}>
                    <Paper id="column" elevation={10}> 
                        <div className="flex-container">
                            <div style={{width:"18%"}}>District</div>
                            <div style={{width:"12%", textAlign:"center"}}>White</div>
                            <div style={{width:"14%", textAlign:"center"}}>African</div>
                            <div style={{width:"14%", textAlign:"center"}}>Hispanic</div>
                            <div style={{width:"13%", textAlign:"center"}}>Asian</div>
                            <div style={{width:"13%", textAlign:"center"}}>Total</div>
                            <div style={{width:"12%"}}>Compactness</div>
                        </div>
                    </Paper>
                    <Paper style={{overflow: "scroll", height: "500px", overflowX: "hidden"}}>
                    {
                        info.map((district)=>(
                            <Paper id="row">
                                <div className="flex-container">
                                    <div style={{width:"18%"}}>{district.properties.District}</div>
                                    <div style={{width:"12%", textAlign:"center"}}>{(Math.ceil(district.properties.WhitePop)).toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                                    <div style={{width:"14%", textAlign:"center"}}>{(Math.ceil(district.properties.AfricanPop)).toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                                    <div style={{width:"15%", textAlign:"center"}}>{(Math.ceil(district.properties.HispPop)).toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                                    <div style={{width:"13%", textAlign:"center"}}>{(Math.ceil(district.properties.AsianPop)).toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                                    <div style={{width:"14%", textAlign:"center"}}>{(Math.ceil(district.properties.TotalPop)).toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                                    <div style={{width:"14%", textAlign:"right"}}>{Math.round(district.properties.Compactness * 1000) / 1000}</div>
                                </div>
                            </Paper>
                        ))
                    }
                    </Paper>
                </Paper>
            </div>
        );
    }
}

export default CardPlans;