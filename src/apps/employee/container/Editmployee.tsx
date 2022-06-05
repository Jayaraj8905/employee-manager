import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectEmployeeById, selectEmployeeListLoading, selectEmployeeSubmitting, updateEmployee } from "../store/employee";
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
  const updating = useAppSelector(selectEmployeeSubmitting);
  const navigate = useNavigate();

  const employee = useAppSelector((state) => selectEmployeeById(state, `${id}`));
  const loading = useAppSelector(selectEmployeeListLoading);

  const onSubmit = async (data: EmployeeForm) => {
    // Dispatch the callback action
    try {
      await dispatch(updateEmployee({
        id: id || '',
        employee: data
      })).unwrap();
      navigate('/employee/list');
    } catch (error) {
      // Show error on failure
      console.error('Error while updating employee', error);
    }
  };
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={8} lg={6}>
          <Typography variant="h6" mb={2}>Edit Employee</Typography>
          {!loading ? <FormEmployee submitForm={onSubmit} defaultValues={{
            ...employee
          }} submitting={updating}/> : <FormSkeleton />
          }
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditEmployee;