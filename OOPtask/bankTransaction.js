function bankTransaction ( actionType, amount ){
  
  this.actionType= actionType;
  this.amount = amount;
  balance = 0;
  count = 0;
  
  if (actionType === 'Deposit'){
    balance = balance + amount;
    return balance;
  }
  count= count + 1;
  if (( actionType === 'Withdraw') & (balance >= amount)){
    balance = balance - amount;
  count = count + 1;
    
  }
  else if ((actionType === 'Withdraw') & (balance < amount)){
    return "You do not  have enough Money to withdraw, Make a deposit and come back";
  }
  while (count > 1){
    return balance;
}
}
