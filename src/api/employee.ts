import { AxiosResponse } from "axios";
import { baseApi } from "./base";

export enum GENDER {
  MALE = "male",
  FEMALE = "female",
}
export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: number;
  gender: GENDER;
}

export type EmployeeResponse = {
  list: Array<Employee>;
};

/**
 * Fetch the employee list
 * @returns
 */
export async function fetchEmployees(): Promise<
  AxiosResponse<EmployeeResponse>
> {
  return baseApi.get(`/employee`);
}
