const pizzas = [
    {
        name: "პეპერონი",
        price: 20
    },
    {
        name: "მარგარიტა",
        price: 15
    },
    {
        name: "კომბინირებული",
        price: 22
    }
];
const randomElement = pizzas[Math.floor(Math.random() * pizzas.length)]; 
console.log("თქვენი პიცა " + randomElement.name + " მზადდება");

 