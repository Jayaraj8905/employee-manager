
import {FC} from "react";
import ListEmployee from "./apps/employee/ListEmployee";
import AddEmployee from "./apps/employee/AddEmployee";
import EditEmployee from "./apps/employee/Editmployee";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'employee-list',
        title: 'Employee List',
        path: '/employee/list',
        enabled: true,
        component: ListEmployee
    },
    {
        key: 'add-employee',
        title: 'Add Employee',
        path: '/employee/add',
        enabled: true,
        component: AddEmployee
    },
    {
        key: 'edit-employee',
        title: 'Edit Employee',
        path: '/employee/edit/:id',
        enabled: true,
        component: EditEmployee
    }
]