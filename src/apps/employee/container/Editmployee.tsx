import React from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectEmployeeById, selectEmployeeListLoading, updateEmployee } from "../store/employee";
import FormEmployee from "../components/FormEmployee";
import { EmployeeForm } from "../../../api/employee";
import { FormSkeleton } from "../../../components/skeletons";

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
      <Typography variant="h6" mb={2}>Edit Employee</Typography>
      {!loading ? <FormEmployee submitForm={onSubmit} defaultValues={{
        ...employee
      }}/> : <FormSkeleton />
      }
    </Box>
  );
};

export default EditEmployee;