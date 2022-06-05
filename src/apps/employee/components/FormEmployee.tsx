import React from "react";
import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInputText, FormInputRadio } from "../../../components/form-components";
import { EmployeeForm } from "../../../api/employee";

interface IFormProps {
  defaultValues: EmployeeForm;
  submitting?: boolean;
  submitForm: (form: EmployeeForm) => void;
}

const schema = yup.object({
  firstName: yup
    .string()
    .required("First name is required")
    .min(6, "First name should have minimum 6 characters")
    .max(10, "First name should have maximum 10 characters")
    .typeError("First name should be a string"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(6, "Last name should have minimum 6 characters")
    .max(10, "Last name should have maximum 10 characters"),
  emailAddress: yup
    .string()
    .email("Email address is not valid")
    .required("Email address is required"),
  phoneNumber: yup
    .number()
    .required("Phone number is required")
    .min(10000000, "Phone number should be 8 digits")
    .max(99999999, "Phone number should be 8 digits")
    .typeError("Phone number should be a number"),
  gender: yup.string().required(),
});
/**
 *
 * Add Employee Page which used to show the add employee form
 */
const FormEmployee = ({ defaultValues = {}, submitForm, submitting }: IFormProps) => {
  const {
    handleSubmit,
    control,
  } = useForm<EmployeeForm>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: EmployeeForm) => submitForm(data);

  return (  
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" flexDirection="column">
        <Box mb={2}>
          <FormInputText
            name="firstName"
            control={control}
            label="First Name"
          />
        </Box>
        <Box mb={2}>
          <FormInputText name="lastName" control={control} label="Last Name" />
        </Box>
        <Box mb={2}>
          <FormInputText
            name="emailAddress"
            control={control}
            label="Email Address"
          />
        </Box>
        <Box mb={2}>
          <FormInputText
            name="phoneNumber"
            control={control}
            label="Phone Number"
          />
        </Box>
        <Box mb={2}>
          <FormInputRadio name={"gender"} control={control} label={"Gender"} />
        </Box>
        <Box display="flex" justifyContent="end">
          <Button type="submit" color="primary" variant="contained">
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default React.memo(FormEmployee);
