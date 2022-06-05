import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

/**
 * 
 * AppHeader which used to show the header of the app
 */
const AppHeader = () => {

    return (
        <AppBar position="static">
        <Toolbar>
            <Box flex={1}>
                <Link to="/employee/list" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <Typography variant="h6">
                        Employee Manager
                    </Typography>
                </Link>
            </Box>
        </Toolbar>
        </AppBar>
    );
}

export default React.memo(AppHeader);
