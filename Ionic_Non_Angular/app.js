const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');

//https://unpkg.com/@ionic/core@4/dist/ionic.js

let totalExpenese = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}

function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Invalid inputs';
    alert.message = 'Please enter valid reason and amount!';
    alert.buttons = ['Okay'];
  
    document.body.appendChild(alert);
    return alert.present();
}

confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0) {
        presentAlert()
        return;
    }
    //console.log(enteredReason, enteredAmount);
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $ ' + enteredAmount;
    
    expensesList.appendChild(newItem);

    totalExpenese += +enteredAmount;
    totalExpensesOutput.textContent = totalExpenese;
    clear();
});

cancelBtn.addEventListener('click', clear);