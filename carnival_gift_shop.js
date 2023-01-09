const input = require('sync-input');

let giftList = [
    { id: 1, name: "Teddy Bear", price: 10 },
    { id: 2, name: "Big Red Ball", price: 5 },
    { id: 3, name: "Huge Bear", price: 50 },
    { id: 4, name: "Candy", price: 8 },
    { id: 5, name: "Stuffed Tiger", price: 15 },
    { id: 6, name: "Stuffed Dragon", price: 30 },
    { id: 7, name: "Skateboard", price: 100 },
    { id: 8, name: "Toy Car", price: 25 },
    { id: 9, name: "Basketball", price: 20 },
    { id: 10, name: "Scary Mask", price: 75 }
]

let interactionGoing = true;
let ticketWallet = 0;
  
// Welcome Messages
console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
console.log("Hello friend! Thank you for visiting the carnival!");
listOfGifts();

// Start interaction with customer
while(interactionGoing) {
    startInteraction();
}

function startInteraction() {
    console.log("What do you want to do?\n1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop");
    let customerAction = Number(input());
    switch(customerAction) {
        case 1:
            buyAGift();
            break;
        case 2:
            addTickets();
            break;
        case 3:
            checkBalance();
            break;
        case 4:
            listOfGifts();
            break;
        case 5:
            exitShop();
            break;
        default:
            console.log("Please enter a valid number!");
            startInteraction();
            break;

    }
}

function buyAGift() {
    if (giftList.length < 1) {
        console.log("Wow! There are no gifts to buy.");
        console.log("");
        startInteraction();
    }

    let numberOfGift = Number(input("Enter the number of the gift you want to get: "));
    let gift = giftList.find(e => e.id === numberOfGift);

    if (isNaN(numberOfGift)) {
        console.log("Please enter a valid number!");
    }
    else if (!giftList.some(e => e.id === numberOfGift)) {
        console.log("There is no gift with that number!");
    }
    else if ((ticketWallet - gift.price) < 0) {
        console.log("You don't have enough tickets to buy this gift.");
        console.log(`Total tickets: ${ticketWallet}\n`);
    } else {
        console.log(`Here you go, one ${gift.name}!`);
        ticketWallet -= gift.price;
        console.log(`Total tickets: ${ticketWallet}\n`);
        giftList.splice(giftList.indexOf(gift), 1);
    }
    console.log("");
    startInteraction();
}

function addTickets() {
    let addAmount = Number(input("Enter the ticket amount: "));
    if (isNaN(addAmount) || addAmount < 0 || addAmount > 1000) {
        console.log("Please enter a valid number between 0 and 1000.");
    } else {
        ticketWallet += addAmount;
        console.log(`Total tickets: ${ticketWallet}\n`);
    }
    console.log("");
    startInteraction();
}

function checkBalance() {
    console.log(`Total tickets: ${ticketWallet}\n`);
    startInteraction();
}

function listOfGifts() {
    console.log("Here's the list of gifts:\n");
    if (giftList.length < 1) {
        console.log("Wow! There are no gifts to buy.\n");
        startInteraction()
    } else {
        for (let i = 0; i < giftList.length; i++) {
            console.log(`${giftList[i].id}- ${giftList[i].name}, Cost: ${giftList[i].price} tickets`);
        }
    }
    console.log("");
    startInteraction();
}

function exitShop() {
    console.log("Have a nice day!");
    interactionGoing = false;
}

