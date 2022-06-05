import React from "react";
import { Box, Typography } from "@mui/material";
import FormEmployee from "../components/FormEmployee";
import { EmployeeForm, GENDER } from "../../../api/employee";
import { useAppDispatch } from "../../../store/hooks";
import { createEmployee } from "../store/employee";

/**
 * 
 * Add Employee Page which used to show the add employee form
 */
const AddEmployee = () => {
  const dispatch = useAppDispatch();

  const onSubmit = (data: EmployeeForm) => {
    dispatch(createEmployee(data));
  };

  return (
    <Box>
      <Typography variant="subtitle1" mb={2}>Add Employee</Typography>
      <FormEmployee submitForm={onSubmit} defaultValues={{
        gender: GENDER.MALE
      }}/>
    </Box>
  );
};

export default AddEmployee;