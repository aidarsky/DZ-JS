const inputUsd = document.getElementById('usd');
const inputEur = document.getElementById('eur');
const inputSom = document.getElementById('som');

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const rates = data;

        function convertCurrency(input, inputCurrency, outputCurrency) {
            if (inputCurrency === outputCurrency) {
                return input;
            }
            const rate = rates[inputCurrency] / rates[outputCurrency];
            return input * rate;
        }

        function updateCurrencies(event) {
            const input = event.target;
            const inputValue = parseFloat(input.value);
            if (isNaN(inputValue)) {
                inputUsd.value = '';
                inputEur.value = '';
                inputSom.value = '';
            } else {
                if (input === inputUsd) {
                    inputEur.value = convertCurrency(inputValue, 'usd', 'eur').toFixed(2);
                    inputSom.value = convertCurrency(inputValue, 'usd', 'som').toFixed(2);
                } else if (input === inputEur) {
                    inputUsd.value = convertCurrency(inputValue, 'eur', 'usd').toFixed(2);
                    inputSom.value = convertCurrency(inputValue, 'eur', 'som').toFixed(2);
                } else if (input === inputSom) {
                    inputUsd.value = convertCurrency(inputValue, 'som', 'usd').toFixed(2);
                    inputEur.value = convertCurrency(inputValue, 'som', 'eur').toFixed(2);
                }
            }
        }

        inputUsd.addEventListener('input', updateCurrencies);
        inputEur.addEventListener('input', updateCurrencies);
        inputSom.addEventListener('input', updateCurrencies);
    });