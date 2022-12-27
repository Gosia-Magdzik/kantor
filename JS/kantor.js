{
    let formElement = document.querySelector(".js-form");
    let amountElement = document.querySelector(".js-amount");
    let currencyElement = document.querySelector(".js-currency");
    let resultElement = document.querySelector(".js-result");
    
    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
    
        let eurRate = 4.7;
        let gbpRate = 5.39;
        let nokRate = 0.45;
        let usdRate = 4.42;
    
        let amount = amountElement.value;
        let currency = currencyElement.value;
        let rate;
    
        switch (currency) {
            case "EUR":
                rate = eurRate;
                break;
            case "GBP":
                rate = gbpRate;
                break;
            case "NOK":
                rate = nokRate;
                break;
            case "USD":
                rate = usdRate;
        }
    
        let result = amount / rate;
    
        resultElement.innerHTML = `${result.toFixed(2)} ${currency}`;
    });    
}
