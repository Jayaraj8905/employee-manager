import React from "react";
import { Box, Typography } from "@mui/material";
import FormEmployee from "./components/FormEmployee";
import { EmployeeForm, GENDER } from "../../api/employee";

/**
 * 
 * Add Employee Page which used to show the add employee form
 */
const AddEmployee = () => {
  const onSubmit = (data: EmployeeForm) => {
    console.debug('Form Submitted');
    console.debug(data);
  };

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
      <Typography variant="subtitle1" mb={2}>Add Employee</Typography>
      <FormEmployee submitForm={onSubmit} defaultValues={{
        gender: GENDER.MALE
      }}/>
    </Box>
  );
};

export default AddEmployee;