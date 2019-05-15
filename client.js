const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

for (let i = 0; i < employees.length; i++) {
  bonusCalc(employees[i]);
}
function bonusCalc(employee) {
  // console.log(employee);
  // conditional to check employee rate & determine 1st part of the bonus %
  let bonusPercentage = 0;
  if (employee.reviewRating <= 2) {
    bonusPercentage = 0;
  } else if (employee.reviewRating <= 3) {
    bonusPercentage = 0.04;
  } else if (employee.reviewRating <= 4) {
    bonusPercentage = 0.06;
  } else if (employee.employeeRating <= 5) {
    bonusPercentage = 0.10;
  }

  // log out the bonusPercentage
  console.log(bonusPercentage);

  // check tenure
  if (employee.employeeNumber.length === 4) {
    //console.log('4');
    bonusPercentage += 5;
  }
  //check annual income
  if (employee.annualSalary >= 65000 ){
    //console.log('loaded');
    bonusPercentage -= 0.01;
  }
  // not higher than 13% total
  if (bonusPercentage >= 0.13){
    //console.log('Reduce bonus to 13%')
    bonusPercentage = 0.13;
  }
  if (bonusPercentage === 0){ // not higher than zero
    bonusPercentage === 0;
  }
// create an empty obj
  let newObject = {};
  newObject.name = employee.name,
  newObject.bonusPercentage = bonusPercentage,
  newObject.totalBonus = employee.annualSalary * bonusPercentage;
  newObject.totalCompensation = Number(employee.annualSalary) + newObject.totalBonus;

  console.log(newObject);
  
}

console.log(employees);


// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// console.log( employees );
