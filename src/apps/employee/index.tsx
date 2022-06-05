import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useAppDispatch } from "../../store/hooks";
import { getEmployeesList } from "./store/employee";
import { Route, Routes, Navigate } from "react-router-dom";
import { employeeRoutes } from "./routes";

/**
 *
 * EmployeeHomePage
 */
const Employee = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEmployeesList());
  }, [dispatch]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "background.default",
        display: "flex",
        flexDirection: "column",
        p: 3,
      }}
    >
      <Routes>
        {employeeRoutes.map((route) => (
          <Route
            key={route.key}
            path={route.path}
            element={<route.component />}
          />
        ))}
        <Route path="*" element={<Navigate to="/employee/list" replace />} />
      </Routes>
    </Box>
  );
};

export default Employee;
