
function getCurrency(strCurrency) {
    let currencycode;
    if (strCurrency == 'USD') {
        currencycode = 'US';
    } else if (strCurrency == 'INR' ||
        strCurrency == 'Indian rupee') {
        currencycode = 'IN';
    } else {
        currencycode = 'US';
    }
    var format = currencycode == 'US' ? '$' : '₹';
    return format;
}

export default getCurrency;
