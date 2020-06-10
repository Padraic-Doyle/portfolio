//

const currency_one = document.getElementById('currency-one');
const currency_two = document.getElementById('currency-two');
const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');





// Calculate rates
async function calculate() {


    //async function getData() {
    let base = currency_one.value;
    let counter = currency_two.value;
    let base_amount = amount_one.value;
    let counter_amount = amount_two.value;

    const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${base}`);
    const data = await res.json();
    //console.log(data);

    amount_two.value = ((+data.rates[counter]) * base_amount).toFixed(2);
    // console.log(data.rates[counter].toFixed(2));

    rate.innerHTML = `<p> 1 ${base} is ${data.rates[counter]} ${counter}</p>`;
}
//getData();


//}

// Swap currency
async function swapCurrencies() {
    let base = currency_one.value;
    let counter = currency_two.value;
    // let base_amount = amount_one.value;
    //let counter_amount = amount_two.value;



    currency_one.value = counter;
    currency_two.value = base;
    calculate();

}

// Event Listeners
currency_one.addEventListener('change', calculate);
amount_one.addEventListener('input', calculate);
currency_two.addEventListener('change', calculate);
amount_two.addEventListener('input', calculate);
swap.addEventListener('click', swapCurrencies);