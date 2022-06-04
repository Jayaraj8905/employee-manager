import React from "react";
import { Box, Typography } from "@mui/material";

/**
 * 
 * Add Employee Page which used to show the add employee form
 */
const AddEmployee = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "background.default",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3">Add Employee</Typography>
    </Box>
  );
};

export default AddEmployee;