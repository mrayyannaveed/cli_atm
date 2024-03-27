#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 120000; //Dollar
let myPin = 1234; //Pin
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash", "deposit cash"],
        },
    ]);
    // You can withdraw your balance from your account
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    // You can check your balance 
    else if (operationAns.operation === "check balance") {
        console.log(`Your balance is: ${myBalance}`);
    }
    // You can use fast cash method for quick withdraw
    else if (operationAns.operation === "fast cash") {
        let cashAmount = await inquirer.prompt([
            {
                name: "fast",
                message: "Select amount you want to cash out",
                type: "list",
                choices: [1000, 2000, 5000, 10000],
            },
        ]);
        if (cashAmount.fast === 1000) {
            console.log((`Your remaining balance is: ${myBalance - 1000}`));
        }
        else if (cashAmount.fast === 2000) {
            console.log((`Your remaining balance is: ${myBalance - 2000}`));
        }
        else if (cashAmount.fast === 5000) {
            console.log((`Your remaining balance is: ${myBalance - 5000}`));
        }
        else if (cashAmount.fast === 10000) {
            console.log((`Your remaining balance is: ${myBalance - 10000}`));
        }
    }
    // You can deposit cash in your account
    if (operationAns.operation === "deposit cash") {
        let depositAmount = await inquirer.prompt([
            {
                name: "deposit",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        if (depositAmount.deposit >= 0) {
            myBalance += depositAmount.deposit;
            console.log(`Your current balance is: ${myBalance}`);
        }
        else {
            console.log("Enter right amount");
        }
    }
}
else {
    console.log("Incorrect pin code");
}
