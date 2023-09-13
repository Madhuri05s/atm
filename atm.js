const prompt = require("prompt-sync")();

function BankingProcess() {
    var notes_2000 = true;
    var notes_500 = false;
    var notes_200 = false;
    var notes_100 = true;



    const SBI = {
        UserName: "Madhuri",
        Password: 1234,
        transferUserName: "karthik",
        accountNumber: "123456789101"

    }
    const AXIS = {
        UserName: "Manasa",
        Password: 5678,
        transferUserName: "vamsi",
        accountNumber: "544728741234"


    }
    const HDFC = {
        UserName: "Munni",
        Password: 9101,
        transferUserName: "kiran",
        accountNumber: "567289139702"


    }

    var Bankbalance = 1000;
    transferBankbalance = 2000;
    var printministatement = [];


    let user = prompt("Enter your Name : ");
    console.log(user)

    let _password = parseInt(prompt("Enter the password : "));
    console.log(_password)

    if ((user === SBI.UserName && _password === SBI.Password) || (user === AXIS.UserName && _password === AXIS.Password) || (user === HDFC.UserName && _password === HDFC.Password)) {
        console.log("welcome to the ATM process...");

        while (true) {
            let options = {
                Deposit: "1",
                Withdraw: "2",
                BalanceEnqiry: "3",
                MoneyTransfer: "4",
                MiniStatement: "5",
                Exit: "6"
            }




            console.table(options)


            let option = prompt("choose your option : ")


            if (option == options.Exit) {
                console.log("Exit")
                break;
            }
            else if (option == options.MiniStatement) {
                console.log("MiniStatement")
                console.log(printministatement)
            }
            else if (option == options.MoneyTransfer) {
                console.log("MoneyTransfer")
                var transferUserNameID = prompt("enter the tranferUserName : ");
                var transferAccountNumber = prompt("enter the accountNumber : ");
                console.log(transferUserNameID, transferAccountNumber)
                if ((transferUserNameID === SBI.transferUserName && transferAccountNumber === SBI.accountNumber) || (transferUserNameID === AXIS.transferUserName && transferAccountNumber === AXIS.accountNumber) || (transferUserNameID === HDFC.transferUserName && transferAccountNumber === HDFC.accountNumber)) {
                    var transferAmount = parseInt(prompt("enter the transferAmount : "));
                    if ( (transferAmount <= Bankbalance)) {
                        transferBankbalance += transferAmount;
                        Bankbalance -= transferAmount;
                    let PrinttransferAmount = `$${transferAmount} money Transferred successfully to ${transferUserNameID}`
                        printministatement.push([PrinttransferAmount]);

                    }
                    else{
                        console.log("insufficient money")
                    }

                }

            }
            else if (option == options.BalanceEnqiry) {
                console.log("BalanceEnqiry")
                console.log(Bankbalance);


            }
            else if (option == options.Withdraw) {
                console.log("Withdraw")
                var withdrawAmount = parseInt(prompt("enter the withdraw amount : "));

                if (withdrawAmount <= Bankbalance) {
                    Bankbalance -= withdrawAmount;
                    let PrintwithdrawAmount = `$${withdrawAmount}  withdrawAmount successfully.`
                    printministatement.push([PrintwithdrawAmount]);

                    var count = 0;
                    if ((notes_2000) && (withdrawAmount >= 2000)) {
                        var notes_count_2000 = Math.floor(withdrawAmount / 2000);
                        console.log(notes_count_2000, "==> 2000 Notes")
                        count = count + notes_count_2000;
                        withdrawAmount = withdrawAmount - notes_count_2000 * 2000;
                    }
                    if ((notes_500) && (withdrawAmount >= 500)) {
                        var notes_count_500 = Math.floor(withdrawAmount / 500);
                        console.log(notes_count_500, "==> 500 Notes")
                        count = count + notes_count_500;
                        withdrawAmount = withdrawAmount - notes_count_2000 * 500;
                    }
                    if ((notes_200) && (withdrawAmount >= 200)) {
                        var notes_count_200 = Math.floor(withdrawAmount / 200);
                        console.log(notes_count_200, "==> 200 Notes")
                        count = count + notes_count_200;
                        withdrawAmount = withdrawAmount - notes_count_200 * 200;
                    }
                    if ((notes_100) && (withdrawAmount >= 100)) {
                        var notes_count_100 = Math.floor(withdrawAmount / 100);
                        console.log(notes_count_100, "==> 100 Notes")
                        count = count + notes_count_100;
                        withdrawAmount = withdrawAmount - notes_count_100 * 100;
                    }
                    console.log("notes count : ", count)



                }
                else {
                    console.log("insufficient bankBalance")
                }
            }
            else if (option == options.Deposit) {
                console.log("Deposit")
                var depositAmount = parseInt(prompt("enter the deposit amount : "));
                if ((depositAmount > Bankbalance) || (depositAmount < Bankbalance) || (depositAmount == Bankbalance)) {
                    Bankbalance += depositAmount
                    let PrintdepositAmount =`$${depositAmount} amount deposited successfully.`
                    printministatement.push([PrintdepositAmount]);

                }
            }
            else {
                console.log("Please give proper input value")
            }
        }
    }
    else {
        console.log("Details are invalid")
    }
}
BankingProcess()

