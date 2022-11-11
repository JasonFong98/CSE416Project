import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ohio_population from "../imgs/ohio-population.png";
import compactness from "../imgs/compactness-example.png";
import compactness2 from "../imgs/compactness-example2.png";
import Table from "./tables/Table";
import BoxAndWhiskers from "./graphs/boxAndWhiskers";
import BarChart from "./graphs/barChart";
import MMDSummaryTable from "./tables/MMDSummaryTable";
import SMDSummaryTable from "./tables/SMDSummaryTable";
import SamplePlansMenu from "./SamplePlansMenu"
import { borderRadius } from "@mui/system";

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
        <Box sx={{ paddingLeft: 6 }}>
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

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

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
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          textTransform: "none",
        }}
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider"}}
      >
        <Tab sx={{textTransform:"none", fontWeight:"bold"}} label="General Information" {...a11yProps(0)} />
        <Tab sx={{textTransform:"none", fontWeight:"bold"}} label="Ensemble Summary" {...a11yProps(1)} />
        <Tab sx={{textTransform:"none", fontWeight:"bold"}} label="Sample District Plans" {...a11yProps(2)} />
        <Tab sx={{textTransform:"none", fontWeight:"bold"}} label="Racial Fairness" {...a11yProps(3)} />
        <Tab sx={{textTransform:"none", fontWeight:"bold"}} label="Political Fairness" {...a11yProps(4)} />
        <Tab sx={{textTransform:"none", fontWeight:"bold"}} label="Population Equality" {...a11yProps(5)} />
        <Tab sx={{textTransform:"none", fontWeight:"bold"}} label="Compactness Measure" {...a11yProps(6)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Table />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <div id="SMD-Summary">
          SMD Ensemble Summary
        </div>
        <div
          style={{
            position: "absolute",
            top: "15%",
          }}
        >
          <SMDSummaryTable />
        </div>
        <div id="MMD-Summary">
          MMD Ensemble Summary
        </div>
        <div
          style={{
            position: "absolute",
            left: "61%",
            top: "15%",
          }}
        >
          <MMDSummaryTable />
        </div>
      </TabPanel>

      <TabPanel value={value} index={2}>
          <SamplePlansMenu />
      </TabPanel>

      <TabPanel value={value} index={3}>
        <BoxAndWhiskers />
        <h4 style={{ paddingTop: "10%" }}>
          SMD:<br></br>Number of Majority-Minority Districts: 2<br></br>Wasted
          Minority Votes: 20%
        </h4>
        <br></br>
        <h4>
          MMD:<br></br>Number of Majority-Minority Districts: 5<br></br>Wasted
          Minority Votes: 10%
        </h4>
      </TabPanel>

      <TabPanel value={value} index={4}>
        <BarChart />
        <h4 style={{ paddingTop: "10%" }}>
          Get voter registration and past election data to find out
          <br /> what percentage of the state is Democratic/Republican.
          <br /> The number of Republican/Democratic seats should be
          <br /> proportional to the data
        </h4>
      </TabPanel>

      <TabPanel value={value} index={5}>
        <img src={ohio_population} style={{ maxWidth: "600px" }} />
      </TabPanel>

      <TabPanel value={value} index={6}>
        <h4>MMD</h4>
        <img src={compactness} />
        <br></br>
        <br></br>
        <h4>SMD</h4>
        <img src={compactness2} />
      </TabPanel>
    </Box>
  );
}
