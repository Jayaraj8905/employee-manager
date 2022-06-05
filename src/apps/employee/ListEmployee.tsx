import React, { useEffect } from "react";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getEmployeesList, selectEmployeeList } from "./store/employee";

/**
 *
 * List Employee Page which used to show the employees
 */
const ListEmployee = () => {
  const dispatch = useAppDispatch();

  const employees = useAppSelector(selectEmployeeList);

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
      <Typography variant="subtitle1" mb={2}>Employee List</Typography>
      <TableContainer component={Paper}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees ? employees.map((employee) => (
              <TableRow
                key={employee.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {employee.firstName}
                </TableCell>
                <TableCell>{employee.lastName}</TableCell>
                <TableCell>{employee.emailAddress}</TableCell>
                <TableCell>{employee.phoneNumber}</TableCell>
                <TableCell>{employee.gender}</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            )) : <Typography>Loading</Typography>}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ListEmployee;
