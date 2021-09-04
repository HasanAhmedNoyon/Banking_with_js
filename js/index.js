//Bank Pages dashboard
//Deposit Button Event Listner Handle
document.getElementById('deposit-submit').addEventListener('click', function(){
    //Input Field Handle
    const currentDepositAmount = document.getElementById('deposit-input');
    const currentDepositAmountText =  currentDepositAmount.value;
    currentDepositAmount.value = '';
    const currentDepositAmountNumber = parseFloat(currentDepositAmountText);
    console.log("Input Field : ", currentDepositAmountNumber);


    //Deposit Amount Handle
   const depositAmount = document.getElementById('deposit-amount');
   const previousDepositAmountText = depositAmount.innerText;
   const previousDepositAmountNumber = parseFloat(previousDepositAmountText);

   //Total Deposit Number in Deposit Field
   const totalDepositAmount = currentDepositAmountNumber + previousDepositAmountNumber;
   depositAmount.innerText = totalDepositAmount;


   //Balance Dashborad Using Deposit value
   const balanceAmount = document.getElementById('balance-amount');
   const balanceAmountText = balanceAmount.innerText;
   const balanceAmountNumber = parseFloat(balanceAmountText);
   const totalBalance = balanceAmountNumber + currentDepositAmountNumber;
   balanceAmount.innerText = totalBalance;


});


//Withdraw Button Event Listner Handle
document.getElementById('withdraw-submit').addEventListener('click', function(){
    //Withdraw Input Field 
    const currentWithdrawAmount = document.getElementById('withdraw-input');
    const currentWithdrawAmountText = currentWithdrawAmount.value;
    const currentWithdrawAmountNumber = parseFloat(currentWithdrawAmountText);
    currentWithdrawAmount.value = '';

    //Withdraw Amount update From Dashboard
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountText = withdrawAmount.innerText;
    const withdrawAmountNumber = parseFloat(withdrawAmountText);

    const totalWithdrawAmount = currentWithdrawAmountNumber + withdrawAmountNumber; 
    withdrawAmount.innerText = totalWithdrawAmount;



    //Balance Dashborad Using Withdraw value
   const balanceAmount = document.getElementById('balance-amount');
   const balanceAmountText = balanceAmount.innerText;
   const balanceAmountNumber = parseFloat(balanceAmountText);
   const totalBalance = balanceAmountNumber - currentWithdrawAmountNumber;
   balanceAmount.innerText = totalBalance;

   if(totalBalance <= 0){
       alert('You have no money! Go to work and Earn Money!!')
       balanceAmount.innerText = 0;
   }


    
});