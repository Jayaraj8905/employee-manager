import React from "react";
import { Box, Typography } from "@mui/material";

/**
 * 
 * Edit Employee Page which used to show the edit employee form
 */
const EditEmployee = () => {
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
      <Typography variant="h3">Edit Employee</Typography>
    </Box>
  );
};

export default EditEmployee;