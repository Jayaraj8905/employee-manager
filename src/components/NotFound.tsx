import React from "react";
import { Box, Typography } from "@mui/material";

/**
 * 
 * Add Employee Page which used to show the add employee form
 */
const NotFound = () => {
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
      <Typography variant="h3">Page not found</Typography>
    </Box>
  );
};

export default React.memo(NotFound);
