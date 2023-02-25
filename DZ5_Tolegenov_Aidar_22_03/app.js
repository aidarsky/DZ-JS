

let rates = null;
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        rates = JSON.parse(this.responseText);
    }
};
xhr.open("GET", "data.json", false);
xhr.send();

function convert(from) {
    let value = parseFloat(document.getElementById(from).value);
    if (isNaN(value)) {
        return;
    }
    switch (from) {
        case "som":
            document.getElementById("usd").value = (value / rates.usd).toFixed(2);
            document.getElementById("eur").value = (value / rates.eur).toFixed(2);
            break;
        case "usd":
            document.getElementById("som").value = (value * rates.usd).toFixed(2);
            document.getElementById("eur").value = (value * rates.usd / rates.eur).toFixed(2);
            break;
        case "eur":
            document.getElementById("som").value = (value * rates.eur).toFixed(2);
            document.getElementById("usd").value = (value * rates.eur / rates.usd).toFixed(2);
            break;
    }
}

