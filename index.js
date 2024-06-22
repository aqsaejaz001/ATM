#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 5000;
let myPin = 12345;
const pin_Ans = await inquirer.prompt([
    {
        name: "Pin",
        type: "number",
        message: "Enter your pin"
    },
]);
if (pin_Ans.Pin === myPin) {
    console.log(" Correct your pin");
    const operation_Ans = await inquirer.prompt([
        {
            name: "Operation",
            type: "list",
            message: "Select the option",
            choices: [" Withdraw", " Deposit", " Fast Cash", " Check Balance", " Exit"]
        },
    ]);
    if (operation_Ans.Operation === " Withdraw") {
        const amount_Ans = await inquirer.prompt([
            {
                name: "Amount",
                type: "number",
                message: "Enter your amount"
            },
        ]);
        if (myBalance < amount_Ans.Amount) {
            console.log(" Insufficient Balance");
        }
        else {
            myBalance -= amount_Ans.Amount;
            console.log(` Your remaining balance is: ${myBalance}`);
        }
    }
    if (operation_Ans.Operation === " Deposit") {
        const amount_Ans2 = await inquirer.prompt([
            {
                name: "Amount2",
                type: "number",
                message: "Enter deposit amount"
            },
        ]);
        myBalance += amount_Ans2.Amount2;
        console.log(` Your balance is: ${myBalance}`);
    }
    if (operation_Ans.Operation === " Fast Cash") {
        const fastCash_Ans = await inquirer.prompt([
            {
                name: "FastCash",
                type: "list",
                message: "Select amount",
                choices: [1000, 3000, 5000, 7000]
            },
        ]);
        if (myBalance < fastCash_Ans.FastCash) {
            console.log(" Insufficient Balance");
        }
        else {
            myBalance -= fastCash_Ans.FastCash;
            console.log(` Your remaining balance is: ${myBalance}`);
        }
    }
    else if (operation_Ans.Operation === " Check Balance") {
        console.log(` Your balance is: ${myBalance}`);
    }
    else if (operation_Ans.Operation === " Exit") {
        console.log("Thanks for visit");
    }
}
else {
    console.log("Incorrect pin");
}
