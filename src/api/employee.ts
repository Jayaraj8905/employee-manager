import { AxiosResponse } from "axios";
import { baseApi } from "./base";
import { APISTATUS } from "./constants";

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
  id: string;
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
 export async function saveEmployeeById(id: string, employee: EmployeeForm): Promise<
 AxiosResponse<Employee>
> {
 return baseApi.put(`/employee`, employee);
}

/**
 * Delete employee
 * @returns
 */
 export async function deleteEmployeeById(id: string): Promise<
 AxiosResponse<{statue: APISTATUS}>
> {
 return baseApi.delete(`/employee/${id}`);
}
