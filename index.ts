#! /usr/bin/env node 

import inquirer from "inquirer";

import chalk from "chalk"
console.log(chalk.magentaBright("\n\t Welcome to My currency converter App\n\t"));

const currency :  any ={
    USD : 1, // base currency
    EURO : 0.91,
    GBP:0.76,
    INR :74.57,
    PKR :280
};
let user_answer = await inquirer.prompt([
    {
        name :"from",
        type:"list",
        message :chalk.greenBright("Enter from currency"),
        choices:["USD","EURO","GBP" ,"INR ","PKR"]
    },
    {
        name :"to",
        type : "list",
        message :chalk.yellowBright("Enter to  currency"),
        choices:["USD","EURO","GBP","INR","PKR"]
    },
    {
        name : "amount",
        type:"number",
        message:chalk.blueBright ("Enter your amount")
    }

]
)
let fromAmount = currency [user_answer.from]
let toAmount = currency [user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
let roundedAmount = Math.round(convertedAmount);
console.log(roundedAmount);