const input = require('sync-input')

const orderList = [
    { id: 1, name: "espresso", water: 250, milk: 0, beans: 16, cost: 4 },
    { id: 2, name: "latte", water: 350, milk: 75, beans: 20, cost: 7 },
    { id: 3, name: "cappuccino", water: 200, milk: 100, beans: 12, cost: 6 }
]

// Milk left in machine
let machineIsOn = true;
let waterLeft = 400;
let milkLeft = 540;
let beansLeft = 120;
let cashInMachine = 550;
let disposableCups = 9;

// System Flow
while(machineIsOn) {
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
        case "remaining":
            checkRemaining();
            break;
        case "exit":
            machineIsOn = false;
            break;
    }
}

function buy() {
    let buyAction = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: : " );
    if (buyAction === "back") {
        return;
    } else {
        processOrder(Number(buyAction));
    }
    
}

function fill() {
    waterLeft += Number(input("Write how many ml of water you want to add: "));
    milkLeft += Number(input("Write how many ml of milk you want to add: ")); 
    beansLeft += Number(input("Write how many grams of coffee beans you want to add: "));
    disposableCups += Number(input("Write how many disposable cups you want to add: "));
}

function take() {
    console.log(`I gave you ${cashInMachine}`);
    cashInMachine = 0;
}

function checkRemaining() {
    console.log("The coffee machine has: ")
    console.log(`${waterLeft} ml of water\n${milkLeft} ml of milk\n${beansLeft} g of coffee beans\n${disposableCups} disposable cups\n${cashInMachine}$ of money`);
}

function processOrder(buyAction) {
    let order = orderList.find(e => e.id === buyAction);
    let enoughWater = waterLeft / order.water;
    let enoughMilk = milkLeft / order.milk;
    let enoughBeans = beansLeft / order.beans;
    let enoughCups = disposableCups >= 1;
    let arr = [enoughWater, enoughMilk, enoughBeans];
    let maxCupsOfCoffee = Math.floor(Math.min(...arr));
    let missingIngredient = arr.find(e => e < 1);   

    if (maxCupsOfCoffee >= 1 && enoughCups) {
        console.log("I have enough resources, making you a coffee!");
        updateMachine(order);
    } else {
        switch (missingIngredient) {
            case enoughWater:
                console.log(`Sorry, not enough water!`);
                break;
            case enoughMilk:
                console.log(`Sorry, not enough milk!`);
                break;
            case enoughBeans:
                console.log(`Sorry, not enough coffee beans!`);
                break;
        }
    }
}

function updateMachine(order) {
    waterLeft -= order.water;
    milkLeft -= order.milk;
    beansLeft -= order.beans;
    disposableCups--;
    cashInMachine += order.cost;
}