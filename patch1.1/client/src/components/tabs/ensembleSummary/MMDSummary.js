import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function MMDSummary() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 450,
            height: 275,
          },
        }}
      >
        <Paper elevation={2}>
            
        </Paper>
      </Box>
    </div>
  );
}
