{
    const formElement = document.querySelector(".js-form");
    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const resultElement = document.querySelector(".js-result");
    
    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
    
        const eurRate = 4.7;
        const gbpRate = 5.39;
        const nokRate = 0.45;
        const usdRate = 4.42;
    
        const amount = amountElement.value;
        const currency = currencyElement.value;
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
    
        const result = amount / rate;
    
        resultElement.innerHTML = `${result.toFixed(2)} ${currency}`;
    });
}


