
import {FC} from "react";
import ListEmployee from "./ListEmployee";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./Editmployee";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const employeeRoutes: Array<Route> = [
    {
        key: 'employee-list',
        title: 'Employee List',
        path: '/list',
        enabled: true,
        component: ListEmployee
    },
    {
        key: 'add-employee',
        title: 'Add Employee',
        path: '/add',
        enabled: true,
        component: AddEmployee
    },
    {
        key: 'edit-employee',
        title: 'Edit Employee',
        path: '/edit/:id',
        enabled: true,
        component: EditEmployee
    }
]