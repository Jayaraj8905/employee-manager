import mock from '../mock';

export const employees = [
    {
      "id": 1,
      "firstName": "Robert",
      "lastName": "Charles",
      "emailAddress": "roert5229@gmail.com",
      "phoneNumber": "98971523",
      "gender": "male"
    },
    {
      "id": 2,
      "firstName": "Johnson",
      "lastName": "Joseph",
      "emailAddress": "jonndavid59@gmail.com",
      "phoneNumber": "97759202",
      "gender": "male"
    },
    {
      "id": 3,
      "firstName": "Barbara",
      "lastName": "Patricia",
      "emailAddress": "marypat78@gmail.com",
      "phoneNumber": "95547889",
      "gender": "female"
    },
    {
      "id": 4,
      "firstName": "William",
      "lastName": "Richards",
      "emailAddress": "richardswilliam@gmail.com",
      "phoneNumber": "90053597",
      "gender": "male"
    }
]

mock.onGet('/employee').reply(({ data }) => {
  return [200, {
      list: employees
  }];
});

mock.onPost('/employee').reply(({ data }) => {
  const newData = {
    id: new Date().getTime(),
    ...JSON.parse(data)
  };
  employees.push(newData);
  return [200, newData];
});

mock.onPut('/employee').reply(({ data }) => {
  const newData = JSON.parse(data);
  const toUpdateIndex = employees.findIndex(employee => employee.id === newData.id);
  employees.splice(toUpdateIndex, 1, newData);
  return [200, employees[toUpdateIndex]];
});

export const deleteEmployeePattern = new RegExp(`/employee/*/`);
mock.onDelete(deleteEmployeePattern).reply(({ url }) => {
  const id = url.split('/')[2];
  const toDeleteIndex = employees.findIndex(employee => employee.id === id);
  employees.splice(toDeleteIndex, 1);
  return [200, {
    status: 'SUCCESS'
  }];
});
