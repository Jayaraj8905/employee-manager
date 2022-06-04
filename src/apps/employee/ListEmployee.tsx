import React from "react";
import { Box, Typography } from "@mui/material";

/**
 *
 * List Employee Page which used to show the employees
 */
const ListEmployee = () => {
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
      <Typography variant="h3">Employee List</Typography>
    </Box>
  );
};

export default ListEmployee;