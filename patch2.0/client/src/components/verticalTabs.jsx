import * as React from "react";
import {useContext} from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import BoxAndWhiskers from "./graphs/boxAndWhiskers";
import BarGraph from "./graphs/barGraph";
import MMDSummary from "./tabs/ensembleSummary/MMDSummary";
import SMDSummary from "./tabs/ensembleSummary/SMDSummary";
import SamplePlansMenu from "./tabs/samplePlansMenu"
import GeneralInfo from "./tabs/generalInfo";
import ComparePlans from "./tabs/comparePlans";
import { GlobalStoreContext } from "../store/store";

import api from "../api/api"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ paddingLeft: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs(state) {
  const stateDict =  {"Ohio": "OH", "Virginia": "VA", "North Carolina": "NC"}
  const stateDistrictNum = {"Ohio": 16, "Virginia": 11, "North Carolina": 13}
  const [value, setValue] = React.useState(0);
  const [BWdata, setBWData] = React.useState({});
  const [BGdata, setBGData] = React.useState({});
  const [enactedData, setEnactedData] = React.useState({});
  const [MMDBWdata, setMMDBWdata] = React.useState({});
  const [MMDSummaryData, setMMDSummaryData] = React.useState();
  const [averageMMDData, setAverageMMDDate] = React.useState();
  const {store}  = useContext(GlobalStoreContext);
  React.useEffect(() => {
    api.getSMDBarGraph(stateDict[state.state]).then((res) => {
      const barGraphData = res.data;
      let tempDict = {};
      for(let i=0; i<barGraphData.length; i++) {
        tempDict[barGraphData[i].split]=barGraphData[i].numberOfPlan
      }
      setBGData(tempDict)
    });
    api.getSMDBoxAndWhiskers(stateDict[state.state]).then((res) => {
      const boxAndWhiskersData = res.data;
      let tempArray = [[],[],[]];
      let districtNumCounter = 1;
      for(let i=0; i<boxAndWhiskersData.length; i++) {
        if (state.state=="Ohio" && districtNumCounter>16) {
          districtNumCounter=1;
        }
        if (state.state=="Virginia" && districtNumCounter>11) {
          districtNumCounter=1;
        }
        if (state.state=="North Carolina" && districtNumCounter>13) {
          districtNumCounter=1;
        }
        let x = districtNumCounter;
        let y = [boxAndWhiskersData[i].min, boxAndWhiskersData[i].firstQ, boxAndWhiskersData[i].median, boxAndWhiskersData[i].thirdQ, boxAndWhiskersData[i].max];
        let xy = { x: x, y: y};
        if(boxAndWhiskersData[i].type=="AFRICAN") {
          tempArray[0].push(xy);
        }
        else if(boxAndWhiskersData[i].type=="ASIAN") {
          tempArray[1].push(xy);
        }
        else if(boxAndWhiskersData[i].type=="LATINO") {
          tempArray[2].push(xy);
        }
        districtNumCounter++;
      }
      setBWData(tempArray);
    });
    api.getSMDDistrictPlans(stateDict[state.state]).then((res) => {
      const enactedDistricts = res.data[0].districts
      let tempArray = [[],[],[]];
      for(let i=0; i<enactedDistricts.length; i++) {
        let x = enactedDistricts[i].id;
        const totalPopulation = enactedDistricts[i].districtDemographics[0].population + enactedDistricts[i].districtDemographics[1].population + enactedDistricts[i].districtDemographics[2].population + enactedDistricts[i].districtDemographics[3].population;
        const africanPercentage = (enactedDistricts[i].districtDemographics[2].population/totalPopulation)*100;
        const asianPercentage = (enactedDistricts[i].districtDemographics[1].population/totalPopulation)*100;
        const latinoPercentage = (enactedDistricts[i].districtDemographics[3].population/totalPopulation)*100;
        let y = africanPercentage;
        let xy = { x: x, y: y};
        tempArray[0].push(xy);
        y = asianPercentage;
        xy = { x: x, y: y};
        tempArray[1].push(xy);
        y = latinoPercentage;
        xy = { x: x, y: y};
        tempArray[2].push(xy);
      }
      tempArray[0].sort(function(a,b) {
        return a.y - b.y;
      });
      tempArray[1].sort(function(a,b) {
        return a.y - b.y;
      });
      tempArray[2].sort(function(a,b) {
        return a.y - b.y;
      });
      for(let i=0; i<enactedDistricts.length; i++) {
        tempArray[0][i]["x"]=i+1;
        tempArray[1][i]["x"]=i+1;
        tempArray[2][i]["x"]=i+1;
      }
      setEnactedData(tempArray)
    });
    api.getMMDBoxAndWhiskers(stateDict[state.state]).then((res) => {
      setMMDBWdata(res.data)
    });
    api.getMMDSummary(stateDict[state.state]).then((res) => {
      setMMDSummaryData(res.data)
    });
    api.getMMDAverageData(stateDict[state.state]).then((res) => {
      setAverageMMDDate(res.data)
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "#E8F4F8",
        display: "flex",
        marginTop: "1%",
        height: "100%",
      }}
    >
      <Tabs
        id="vertical-tab"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider"}}
      >
        <Tab sx={{textTransform:"none", fontWeight:"bold"}} label="General" {...a11yProps(0)} />
        <Tab sx={{textTransform:"none", fontWeight:"bold"}} label="Ensemble Summary" {...a11yProps(1)} />
        <Tab sx={{textTransform:"none", fontWeight:"bold"}} label="Sample District Plans" {...a11yProps(2)} />
        <Tab sx={{textTransform:"none", fontWeight:"bold"}} label="Box & Whisker Plot" {...a11yProps(3)} />
        <Tab sx={{textTransform:"none", fontWeight:"bold"}} label="Political Split" {...a11yProps(4)} />
        <Tab sx={{textTransform:"none", fontWeight:"bold"}} label="Compare Plans" {...a11yProps(5)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <GeneralInfo state={state}/>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <div id="smd-summary">
          SMD Ensemble Summary
        </div>
        <div id="smd-table">
          <SMDSummary state={state}/>
        </div>
        <div id="mmd-summary">
          MMD Ensemble Summary
        </div>
        <div id="mmd-table">
          <MMDSummary mmdData={MMDSummaryData}/>
        </div>
      </TabPanel>

      <TabPanel value={value} index={2}>
          <SamplePlansMenu />
      </TabPanel>

      <TabPanel value={value} index={3}>
        <BoxAndWhiskers data={BWdata} enactedData={enactedData} mmdData={MMDBWdata} state={state}/>
      </TabPanel>

      <TabPanel value={value} index={4}>
        <BarGraph data={BGdata} />
      </TabPanel>

      <TabPanel value={value} index={5}>
        <ComparePlans mmdData={MMDSummaryData} averageMMDData={averageMMDData}/>
      </TabPanel>

    </Box>
  );
}