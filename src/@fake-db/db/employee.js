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
  return [200, {}];
});

mock.onPut('/employee').reply(({ data }) => {
  return [200, {}];
});
