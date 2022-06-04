import React from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { appColors } from "./colorPalette";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import Layout from "./components/Layout";
import AppHeader from "./components/NavBar";
import NotFound from "./components/NotFound";


function App() {

  // define theme
  const theme = createTheme({
    palette: {
      background: {
        default: '#FFFFFF',
      },
      primary: {
        light: appColors.royalBlue[40],
        dark: appColors.royalBlue[100],
        main: appColors.royalBlue[100],
        contrastText: appColors.white,
      },
      secondary: {
        light: appColors.reflexBlue[40],
        dark: appColors.reflexBlue[100],
        main: appColors.reflexBlue[100],
        contrastText: appColors.white,
      },
      error: {
        light: appColors.carmineRed[40],
        dark: appColors.carmineRed[100],
        main: appColors.carmineRed[90],
        contrastText: appColors.white,
      },
      warning: {
        light: appColors.amberYellow[40],
        dark: appColors.amberYellow[100],
        main: appColors.amberYellow[90],
        contrastText: appColors.white,
      },
      info: {
        light: appColors.persianBlue[40],
        dark: appColors.persianBlue[100],
        main: appColors.persianBlue[90],
        contrastText: appColors.white,
      },
      success: {
        light: appColors.forestGreen[40],
        dark: appColors.forestGreen[100],
        main: appColors.forestGreen[90],
        contrastText: appColors.white,
      },
      text: {
        primary: appColors.black[80],
        secondary: appColors.black[70],
        disabled: appColors.black[50],
      },
      divider: appColors.black[20],
      action: {
        selected: appColors.forestGreen[20],
        hover: appColors.royalBlue[10],
        disabledBackground: appColors.black[20],
        disabled: appColors.black[30],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppHeader />
        <Layout>
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
