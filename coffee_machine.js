const input = require('sync-input')

const list = { id: 1, name: "coffee", water: 200, milk: 50, beans: 15 }


let waterLeft = 0;
let milkLeft = 0;
let beansLeft = 0;
let amount = 0;

checkSystem();
getOrder();
processOrder();

function checkSystem() {
    waterLeft = Number(input("Write how many ml of water the coffee machine has: "));
    milkLeft = Number(input("Write how many ml of milk the coffee machine has: "));
    beansLeft = Number(input("Write how many grams of coffee beans the coffee machine has: "));
}

function getOrder() {
    amount = Number(input("Write how many cups of coffee you will need: "));
}

function processOrder() {
    let maxWater = waterLeft / list.water;
    let maxMilk = milkLeft / list.milk;
    let maxBeans = beansLeft / list.beans;
    let arr = [maxWater, maxMilk, maxBeans];
    let maxCupsOfCoffee = Math.floor(Math.min(...arr)); // <- max cups of coffee able to brew

    if (maxCupsOfCoffee > amount) {
        console.log(`Yes, I can make that amount of coffee (and even ${maxCupsOfCoffee - amount} more than that)`);
    } else if (maxCupsOfCoffee === amount) {
        console.log("Yes, I can make that amount of coffee");
    } else {
        console.log(`No, I can make only ${maxCupsOfCoffee} cups of coffee`);
    }
}