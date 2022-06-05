import React, { FC, ReactNode } from "react";
import { Box, CssBaseline } from "@mui/material";

interface LayoutProps {
  children: ReactNode;
}

/**
 * 
 * Layout which used to show the layout of the app with the children
 */
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          minHeight: "100vh",
          maxWidth: "100vw",
          flexGrow: 1,
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default React.memo(Layout);
