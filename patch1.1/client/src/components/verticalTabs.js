import * as React from "react";
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
  const stateDict =  {"Ohio": "OH", "Florida": "FL", "North Carolina": "NC"}
  const [value, setValue] = React.useState(0);
  const [BWdata, setBWData] = React.useState({ "one": [0,1,2,3,4]});
  const [BGdata, setBGData] = React.useState();
  React.useEffect(() => {
    api.getPlots(stateDict[state.state]).then((res) => {
      const barGraphData = res.data.ensemble.repDemSplits;
      const boxWhiskerData=res.data.ensemble.boxAndWhiskers[0];
      console.log(barGraphData[0].numberOfPlans)
      setBWData({
        "one": [boxWhiskerData.min, boxWhiskerData.firstQ, boxWhiskerData.median, boxWhiskerData.thirdQ, boxWhiskerData.max]
      });
      setBGData({
        "1/2": barGraphData[0].numberOfPlans,
        "2/3": barGraphData[1].numberOfPlans,
        "1/3": barGraphData[2].numberOfPlans,
        "3/1": barGraphData[3].numberOfPlans,
        "3/2": barGraphData[4].numberOfPlans,
        "3/1": barGraphData[5].numberOfPlans
      });
      console.log(BGdata)
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
      </Tabs>

      <TabPanel value={value} index={0}>
        <GeneralInfo state={state}/>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <div id="smd-summary">
          SMD Ensemble Summary
        </div>
        <div id="smd-table">
          <SMDSummary />
        </div>
        <div id="mmd-summary">
          MMD Ensemble Summary
        </div>
        <div id="mmd-table">
          <MMDSummary />
        </div>
      </TabPanel>

      <TabPanel value={value} index={2}>
          <SamplePlansMenu />
      </TabPanel>

      <TabPanel value={value} index={3}>
        <BoxAndWhiskers data={BWdata}/>
      </TabPanel>

      <TabPanel value={value} index={4}>
        <BarGraph data={BGdata} />
      </TabPanel>


    </Box>
  );
}