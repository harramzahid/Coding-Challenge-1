//Task 1 Variables and Data Types

let employeeName = "Fatima Taj";
const employeeID = 4;
var isActive = true;
console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive));

//Task 2 Compound Data Types

let products = ("lip gloss", "foundation", "eyeshadow");
const productDetails = { 
    name: self-care,
    price: 233.00,
    inStock: yes , 
}

console.log(products, productDetails);

// Task 3 Assignment Operators
let accountBalance = 600.00;
accountBalance+=100.00;
accountBalance = 700.00;
// the value of the account balance will be 700.00 now
console.log("After += 100:", accountBalance)

accountBalance-=100.00;
accountBalance = 600.00;
// the value of the account balance will be 600.00 now
console.log("After -= 100:", accountBalance)

accountBalance/=2;
accountBalance = 300.00;
//the value of the account balance will be 300.00 now
console.log("After /= 2:", accountBalance)

accountBalance*=2;
accountBalance = 600.00;
// the value of the account balance will be 600.00 now
console.log("After *= 2:", accountBalance)

accountBalance%= 7
accountBalance = 5
// the value of the account balance will be 5 now because modulo gives the remainder
console.log("After %= 7:", accountBalance)
console.log(accountBalance)

//Task 4 Comparison Operators
let empployeescore1 = 5
let empployeescore2 = 6

let comparison1 = empployeescore1 > empployeescore2;
//is epmloyee'1 score greater than employee 2? 
console.log("comparison of empployeescore1 > empployeescore2", comparison1);

let comparison2 = empployeescore1 < empployeescore2;
//is employee 1's score less than employee 2?
console.log("comparison of empployeescore1 < empployeescore2", comparison2);

let comparison3 = empployeescore1 >= empployeescore2;
// is employee 1's score greater than or equal to employee 2's?
console.log("comparison of empployeescore1 >= empployeescore2", comparison3);

let comparison4 = empployeescore1 <= empployeescore2;
//is employee 1's score less than or equal to employee 2's?
console.log("comparison of empployeescore1 <= empployeescore2", comparison4;

let comparison5 = empployeescore1 === empployeescore2;
//is employee 1's score strictly equal to employee 2's? 
console.log("comparison of empployeescore1 === empployeescore2", comparison5);

let comparison6 = empployeescore1 !== empployeescore2;
//is employee 1's score strictly unequal to employee 2's?
console.log("comparison of empployeescore1 !== empployeescore2", comparison6);

// Task 5 Logical Operators
let hasKeyCard = true 
let hasPermission = false
let canAccess = hasKeyCard && hasPermission;
// has keycard and permission
console.log(canAccess);

let canAccess = hasKeyCard || hasPermission;
// has keycard or permission 
console.log(canAccess);

let cannotAccess = !hasPermission;
// does not have permission 
console.log(cannotAccess);
