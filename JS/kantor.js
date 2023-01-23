{
    const currencyValue = (currencyElement) => {
        const currency = currencyElement.value;

        const eurRate = 4.7;
        const gbpRate = 5.39;
        const nokRate = 0.45;
        const usdRate = 4.42;

         switch (currency) {
            case "EUR":
                return eurRate;               
            case "GBP":
                return gbpRate;               
            case "NOK":
                return nokRate;               
            case "USD":
                return usdRate;
        }
    };
    const updateResult = (result, currencyElement) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = result.toFixed(2) + currencyElement.value;   
    };
    const onFormSumit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");

        const amount = amountElement.value;
        const result = amount / currencyValue(currencyElement);

    updateResult (result, currencyElement)
    };

    const init = () => {
        const formElement = document.querySelector(".js-form"); 
        
        formElement.addEventListener("submit", onFormSumit);
    };
    
    init()    
}