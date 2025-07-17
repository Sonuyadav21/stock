function addRow() {
    const inputsDiv = document.getElementById('inputs');

    const newRow = document.createElement('div');
    newRow.classList.add('row');

    const dayInput = document.createElement('input');
    dayInput.type = 'number';
    dayInput.step = '1';
    dayInput.placeholder = 'Day (e.g. 1)';
    dayInput.className = 'day';
    dayInput.required = true;

    const priceInput = document.createElement('input');
    priceInput.type = 'number';
    priceInput.step = '0.01';
    priceInput.placeholder = 'Price (e.g. 105.25)';
    priceInput.className = 'price';
    priceInput.required = true;

    newRow.appendChild(dayInput);
    newRow.appendChild(priceInput);
    inputsDiv.appendChild(newRow);
}
function predictprice() {
    const prices = document.querySelectorAll('.price');
    let totalprice = 0;
    let count = 0;

    prices.forEach(input => {
        const value = parseFloat(input.value);
        if (!isNaN(value)) {
            total += value;
            count++;
        }
    });
    let prediction = 0;
    if (count > 0) {
        predication = (totalprice / count).toFixed(2);
    }
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Predicted Next Price: <strong>${prediction}</strong></p>`;
}

function exitApp() {
    alert('Exiting App');
    // Optional: window.close();  // Not recommended, browsers usually block it.
}

