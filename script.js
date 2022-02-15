
function inputValue(product, price, condition) {
    const productInput = document.getElementById(product + '-input');
    const productInputValue = parseInt(productInput.value);

    if (condition == true) {
        const productInputTotal = productInputValue + 1;
        productInput.value = productInputTotal;
        // phone total
        const phoneTotal = document.getElementById(product + '-total');
        const phoneTotalAmount = price * productInputTotal;
        phoneTotal.innerText = phoneTotalAmount;
    }

    else if (productInputValue > 0) {
        const phoneInputTotal = productInputValue - 1;
        productInput.value = phoneInputTotal;
        // Phone total
        const phoneTotal = document.getElementById(product + '-total');
        const phoneTotalAmount = price * phoneInputTotal;
        phoneTotal.innerText = phoneTotalAmount;
    }
    totalAmount()
}

// incriease input value 
document.getElementById("phone-plus").addEventListener('click', function () {
    inputValue('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    inputValue('phone', 1219, false);
});

document.getElementById('case-plus').addEventListener('click', function () {
    inputValue('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    inputValue('case', 59, false);
});

function totalAmount() {
    const caseInput = document.getElementById('case-input');
    const caseInputValue = parseFloat(caseInput.value);
    const caseInputValueTotal = 59 * caseInputValue;

    const phoneInput = document.getElementById('phone-input');
    const phoneInputValue = parseFloat(phoneInput.value);
    const phoneInputValueTotal = 1219 * phoneInputValue;

    const subTotal = document.getElementById('sub-total');
    const total = phoneInputValueTotal + caseInputValueTotal;
    subTotal.innerText = total;

    const tax = document.getElementById('tax-amount');
    const taxTotal = total / 10;
    tax.innerText = taxTotal;

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = total + taxTotal;
}

