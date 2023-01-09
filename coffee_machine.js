const input = require('sync-input')

const orderList = [
    { id: 1, name: "espresso", water: 250, milk: 0, beans: 16, cost: 4 },
    { id: 2, name: "latte", water: 350, milk: 75, beans: 20, cost: 7 },
    { id: 3, name: "cappuccino", water: 200, milk: 100, beans: 12, cost: 6 }
]

// Milk left in machine
let waterLeft = 400;
let milkLeft = 540;
let beansLeft = 120;
let cashInMachine = 550;
let disposableCups = 9;

// System Flow

checkSystem();
getAction();

function checkSystem() {
    console.log("The coffee machine has: ")
    console.log(`${waterLeft} ml of water\n${milkLeft} ml of milk\n${beansLeft} g of coffee beans\n${disposableCups} disposable cups\n${cashInMachine}$ of money`);
}

function getAction() {
    let action = input("Write action (buy, fill, take): ");
    switch (action) {
        case "buy":
            buy();
            break;
        case "fill":
            fill();
            break;
        case "take":
            take();
            break;
    }
}

function buy() {
    let buyAction = Number(input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:" ));
    processOrder(buyAction);
}

function fill() {
    let addWater = Number(input("Write how many ml of water you want to add: "));
    waterLeft += addWater;
    let addMilk = Number(input("Write how many ml of milk you want to add: ")); 
    milkLeft += addMilk;
    let addBeans = Number(input("Write how many grams of coffee beans you want to add: "));
    beansLeft += addBeans;
    let addCups = Number(input("Write how many disposable cups you want to add: "));
    disposableCups += addCups;
    checkSystem();
}

function take() {
    console.log(`I gave you ${cashInMachine}`);
    cashInMachine -= cashInMachine;
    checkSystem();
}

function processOrder(buyAction) {
    // let maxWater = waterLeft / list.water;
    // let maxMilk = milkLeft / list.milk;
    // let maxBeans = beansLeft / list.beans;
    // let arr = [maxWater, maxMilk, maxBeans];
    // let maxCupsOfCoffee = Math.floor(Math.min(...arr)); // <- max cups of coffee able to brew

    // if (maxCupsOfCoffee > amount) {
    //     console.log(`Yes, I can make that amount of coffee (and even ${maxCupsOfCoffee - amount} more than that)`);
    // } else if (maxCupsOfCoffee === amount) {
    //     console.log("Yes, I can make that amount of coffee");
    // } else {
    //     console.log(`No, I can make only ${maxCupsOfCoffee} cups of coffee`);
    // }
    let order = orderList.find(e => e.id === buyAction);
    waterLeft -= order.water;
    milkLeft -= order.milk;
    beansLeft -= order.beans;
    disposableCups--;
    cashInMachine += order.cost;
    checkSystem();
}