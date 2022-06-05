import { AxiosResponse } from "axios";
import { baseApi } from "./base";

export enum GENDER {
  MALE = "male",
  FEMALE = "female",
}
export interface EmployeeForm {
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  phoneNumber?: number;
  gender?: GENDER;
}
export interface Employee extends EmployeeForm {
  id: number;
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

/**
 * Create new employee
 * @returns
 */
 export async function saveEmployee(employee: EmployeeForm): Promise<
 AxiosResponse<Employee>
> {
 return baseApi.post(`/employee`, employee);
}

/**
 * Update employee
 * @returns
 */
 export async function updateEmployee(employee: Employee): Promise<
 AxiosResponse<Employee>
> {
 return baseApi.put(`/employee`, employee);
}
