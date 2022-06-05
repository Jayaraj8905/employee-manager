import mock from '../mock';

export const employees = [
    {
      "id": 1,
      "firstName": "Jayaraj",
      "lastName": "Kamaraj",
      "emailAddress": "jayaraj8905@gmail.com",
      "phoneNumber": "90853597",
      "gender": "male"
    },
    {
      "id": 2,
      "firstName": "Jayaraj",
      "lastName": "Kamaraj",
      "emailAddress": "jayaraj8905@gmail.com",
      "phoneNumber": "90853597",
      "gender": "male"
    },
    {
      "id": 3,
      "firstName": "Jayaraj",
      "lastName": "Kamaraj",
      "emailAddress": "jayaraj8905@gmail.com",
      "phoneNumber": "90853597",
      "gender": "male"
    },
    {
      "id": 4,
      "firstName": "Jayaraj",
      "lastName": "Kamaraj",
      "emailAddress": "jayaraj8905@gmail.com",
      "phoneNumber": "90853597",
      "gender": "male"
    }
]
export const employeePattern = new RegExp(`/*/employee`);
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
