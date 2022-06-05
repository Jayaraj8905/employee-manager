import React from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectEmployeeById, selectEmployeeListLoading, updateEmployee } from "./store/employee";
import FormEmployee from "./components/FormEmployee";
import { EmployeeForm } from "../../api/employee";

/**
 * 
 * Edit Employee Page which used to show the edit employee form
 */
const EditEmployee = () => {
  const { id } = useParams<{ id: string}>();
  const dispatch = useAppDispatch();

  const employee = useAppSelector((state) => selectEmployeeById(state, `${id}`));
  const loading = useAppSelector(selectEmployeeListLoading);

  const onSubmit = (data: EmployeeForm) => {
    dispatch(updateEmployee({
      id: id || '',
      employee: data
    }));
  };
  return (
    <Box>
      <Typography variant="subtitle1" mb={2}>Add Employee</Typography>
      {!loading ? <FormEmployee submitForm={onSubmit} defaultValues={{
        ...employee
      }}/> : <Typography>Loading</Typography>
      }
    </Box>
  );
};

export default EditEmployee;