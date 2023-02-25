const { faker } = require('@faker-js/faker');
const fs = require("fs");


var employees = [];
function createRandomUser(number) {
  for (var id = 0; id < number; id++) {
    const sex = faker.name.sexType();
    const sex_capitalCase = sex.charAt(0).toUpperCase() + sex.slice(1);
    const firstName = faker.name.firstName(sex);
    const lastName = faker.name.lastName();
    const email = (faker.internet.email(firstName, lastName)).toLocaleLowerCase();
    employees.push({
      "id": faker.datatype.uuid(),
      "firstName": firstName,
      "lastName": lastName,
      "sex": sex_capitalCase,
      "avatar": faker.image.avatar(sex),
      "birthday": (faker.date.birthdate()),
      "email": email,
      "country": faker.address.country(),
      "joining_date": (faker.date.past()),
      'phone': faker.phone.number('##### #####'),
      'address': faker.address.streetAddress(),
      'address_2': faker.address.secondaryAddress(),
      'state': faker.address.state(),
      'zip_code': faker.address.zipCode(),
      'city': faker.address.city(),
      'job_title': faker.name.jobType(),
      "employment_type": faker.helpers.arrayElement(['Full-time', 'Part-time','Intern', 'Contract','Probation']),
      "employment_status":faker.helpers.arrayElement(['Active', 'In-active']),
      "employment_id": faker.datatype.number({max:1000}),
      // "password":faker.password(10,true)
    });
  }
  return { "employees": employees }
}

const user = createRandomUser();

fs.writeFileSync(
  "./src/JSON Files/employees.json",
  JSON.stringify({ employees: createRandomUser(100) })
);

module.exports = createRandomUser


/*
Note : To run this file Open your command termminal and run this command "json-server employees.js"
       and your random data would be replaced to this mentioned file name i.e "employees.json"
       then  copy this data and paste it into respective key value par in db.json file
       and run this command "json-server --watch db.json" to start your json server you can also
       see the whole content of db.json file in "http://localhost:3000".
*/
