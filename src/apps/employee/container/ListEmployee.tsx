import React, { useState } from "react";
import {
  Box,
  CircularProgress,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Fab,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  deleteEmployee,
  selectEmployeeList,
  selectEmployeeListLoading,
} from "../store/employee";
import { Delete, Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { TableSkeleton } from "../../../components/skeletons";
import { Link } from "react-router-dom";
import { Add } from "@mui/icons-material";
import DeleteEmployee from "../components/DeleteEmployee";

/**
 *
 * List Employee Page which used to show the employees
 */
const ListEmployee = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [deleteId, setDeleteId] = useState("");

  const employees = useAppSelector(selectEmployeeList);
  const loading = useAppSelector(selectEmployeeListLoading);

  return (
    <Box>
      {deleteId && (
        <DeleteEmployee
          id={deleteId}
          confirm={(id: string) => {
            setDeleteId(""); // Reset the deleteid
            // If id is there, means user confirmed the delete
            id && dispatch(
              deleteEmployee({
                id,
              })
            )
          }}
        />
      )}
      <Box
        display="flex"
        justifyContent="space-between"
        mb={1}
        alignItems="center"
      >
        <Typography variant="h6">Employee List</Typography>
        <Link to="/employee/add">
          <Fab variant="circular" color="primary" size="small">
            <Add />
          </Fab>
        </Link>
      </Box>
      <TableContainer component={Paper} elevation={5}>
        <Table>
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
              {loading && <TableSkeleton rowCount={5} colCount={6} />}
              {employees.map(
                ({
                  id,
                  firstName,
                  lastName,
                  emailAddress,
                  phoneNumber,
                  gender,
                  deleting,
                }) => (
                  <TableRow
                    key={id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {firstName}
                    </TableCell>
                    <TableCell>{lastName}</TableCell>
                    <TableCell>{emailAddress}</TableCell>
                    <TableCell>{phoneNumber}</TableCell>
                    <TableCell sx={{ textTransform: "capitalize" }}>
                      {gender}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => navigate(`/employee/edit/${id}`)}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        onClick={() =>
                          setDeleteId(id)
                        }
                        disabled={deleting}
                      >
                        {deleting ? <CircularProgress size={18} /> : <Delete />}
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )
              )}
              {!loading && employees.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6}>
                    <Typography align="center" variant="body1">
                      No Employees found
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ListEmployee;
