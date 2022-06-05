import React from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import './@fake-db'
import { appColors } from "./colorPalette";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import AppHeader from "./components/NavBar";
import { Provider } from "react-redux";
import store from "./store";
import Employee from "./apps/employee";


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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <AppHeader />
          <Layout>
            <Routes>
              <Route path="/employee/*" element={<Employee />}/>
              <Route path="*" element={<Navigate to="/employee/list" replace />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
