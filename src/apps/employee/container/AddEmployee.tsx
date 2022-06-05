import React from "react";
import { Box, Typography } from "@mui/material";
import FormEmployee from "../components/FormEmployee";
import { EmployeeForm, GENDER } from "../../../api/employee";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { createEmployee, selectEmployeeSubmitting } from "../store/employee";
import { useNavigate } from "react-router-dom";

/**
 * 
 * Add Employee Page which used to show the add employee form
 */
const AddEmployee = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectEmployeeSubmitting);
  const navigate = useNavigate();

  const onSubmit = async (data: EmployeeForm) => {
    // Dispatch the callback action
    try {
      await dispatch(createEmployee(data)).unwrap();
      navigate('/employee/list');
    } catch (error) {
      // Show error on failure
      console.error('Error while creating employee', error);
    }
  };

  return (
    <Box>
      <Typography variant="h6" mb={2}>Add Employee</Typography>
      <FormEmployee submitForm={onSubmit} defaultValues={{
        gender: GENDER.MALE
      }} submitting={loading}/>
    </Box>
  );
};

export default AddEmployee;