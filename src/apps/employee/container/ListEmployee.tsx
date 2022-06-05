import React from "react";
import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { deleteEmployee, selectEmployeeList, selectEmployeeListLoading } from "../store/employee";
import { Delete, Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { TableSkeleton } from "../../../components/skeletons";

/**
 *
 * List Employee Page which used to show the employees
 */
const ListEmployee = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const employees = useAppSelector(selectEmployeeList);
  const loading = useAppSelector(selectEmployeeListLoading);

  return (
    <Box>
      <Typography variant="h6" mb={2}>Employee List</Typography>
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
            <>
            {loading && <TableSkeleton rowCount={5} colCount={6}/>}
            {employees.map(({id, firstName, lastName, emailAddress, phoneNumber, gender}) => (
              <TableRow
                key={id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {firstName}
                </TableCell>
                <TableCell>{lastName}</TableCell>
                <TableCell>{emailAddress}</TableCell>
                <TableCell>{phoneNumber}</TableCell>
                <TableCell sx={{textTransform: 'capitalize'}}>{gender}</TableCell>
                <TableCell>
                  <IconButton onClick={() => navigate(`/employee/edit/${id}`)}><Edit /></IconButton>
                  <IconButton onClick={() => dispatch(deleteEmployee({
                    id,
                  }))}><Delete /></IconButton>
                </TableCell>
              </TableRow>
            ))}
            </>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ListEmployee;
