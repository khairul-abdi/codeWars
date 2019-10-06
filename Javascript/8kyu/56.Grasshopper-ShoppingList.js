var sandwiches = 4
var salads = 6
var wraps = 5
var frenchFries = 10

var orders = [{
        food: 'sandwiches',
        quantity: sandwiches,
        price: 8
    },
    {
        food: 'salads',
        quantity: salads,
        price: 7
    },
    {
        food: 'wraps',
        quantity: wraps,
        price: 6.5
    },
    {
        food: 'french fries',
        quantity: frenchFries,
        price: 1.2
    },
]

// const totalPrice = orders.reduce((total, {quantity,price
//     }) => total + quantity * price,
//     0
// )

let total = 0
for (let i = 0; i < orders.length; i++) {
    total = orders[i].price * orders[i].quantity
}

console.log(total)

/*
=====SOAL======
Ordering food
You are in charge of ordering food for a party. 
You are going to need 4 sandwiches, 6 salads, 5 wraps, and 
10 orders of french fries. The cost per item of food is:

food	        price
sandwich	    = $8.00
salad	        = $7.00
wrap	        = $6.50
french fries    = $1.20
Create 4 variables to store the quantity of each type of food 
with the following names:

sandwiches
salads
wraps
frenchFries
Create a variable named totalPrice that finds the cost of all 
of the food.
*/
/*
CARA ORANG LAIN
1. ======>

let [sandwiches, salads, wraps, frenchFries]  = [4, 6, 5, 10],
    totalPrice = (sandwiches * 8.00) + (salads * 7.00) + (wraps * 6.50) + (frenchFries * 1.20);

2. ======>

var sandwiches = 4, salads = 6, wraps = 5, frenchFries = 10,
    totalPrice = sandwiches * 8 + salads * 7 + wraps * 6.5 + frenchFries * 1.2

3. ======>

let sandwiches = 4,
    salads = 6,
    wraps = 5,
    frenchFries=10;
    
let totalPrice= (sandwiches * 8.00) + (salads * 7) + (wraps * 6.50) + (frenchFries * 1.20);
*/