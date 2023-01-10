//Write your code here
const input = require('sync-input');

let currencyData = [
"1 USD equals 1 USD",
"1 USD equals 113.5 JPY",
"1 USD equals 0.89 EUR",
"1 USD equals 74.36 RUB",
"1 USD equals 0.75 GBP"
]

let currencies = ["USD", "JPY", "EUR", "RUB", "GBP"];
let currencyTranslation = [1, 113.5, 0.89, 74.36, 0.75];


console.log("Welcome to Currency Converter!");

for (let i = 0; i < currencyData.length; i++) {
  console.log(currencyData[i]);
}

while (true) {
  console.log("What do you want to do?")
  let proceed = Number(input("1-Convert currencies 2-Exit program "));
  if (proceed !== 1 && proceed !== 2) {
    console.log("Unknown input");
  }
  else if (proceed === 2) {
    console.log("Have a nice day!");
    break;
  }
  
  while (proceed !== 1 && proceed !== 2) {
  console.log("What do you want to do?")
  let proceed = Number(input("1-Convert currencies 2-Exit program "));
  if (proceed !== 1 && proceed !== 2) {
    console.log("Unknown input");
  }
  else if (proceed === 2) {
    console.log("Have a nice day!");
    break;
  }
  }

  console.log("What do you want to convert?");
  let currencyFrom = input("From: ").toUpperCase();
  if (!currencies.includes(currencyFrom)) {
      console.log("Unknown currency");
    }
  
  while (!currencies.includes(currencyFrom)) {
    console.log("What do you want to convert?");
    let currencyFrom = input("From: ").toUpperCase();
    if (!currencies.includes(currencyFrom)) {
      console.log("Unknown currency");
    }
  }

  let currencyToConvertTo = input("To: ").toUpperCase();
      if (!currencies.includes(currencyToConvertTo)) {
        console.log("Unknown currency");
      }

  while (!currencies.includes(currencyToConvertTo)) {
    let currencyToCovertTo = input("To: ").toUpperCase();
      if (!currencies.includes(currencyToCovertTo)) {
        console.log("Unknown currency");
      }
  }
    
  let amount = Number(input("Amount: "));
  if (amount < 1) {
    console.log("The amount can not be less than 1");
  }
  else if (isNaN(amount)) {
    console.log("The amount has to be a number");
  }

  while (amount < 1 || isNaN(amount)) {
    let amount = Number(input("Amount: "));
    if (amount < 1) {
      console.log("The amount can not be less than 1");
    }
    else if (isNaN(amount)) {
      console.log("The amount has to be a number");
    }
  }
     
  // Calc and return Currency
  let fromIndex = currencies.indexOf(currencyFrom);
  let toIndex = currencies.indexOf(currencyToConvertTo);
  let calc = amount / currencyTranslation[fromIndex] * currencyTranslation[toIndex];
  console.log(`Result: ${amount} ${currencyFrom} equals ${calc.toFixed(4)} ${currencyToConvertTo}`);
}

