document.getElementById('main-action-button').onclick = function () {
    document.getElementById('products').scrollIntoView({behavior: 'smooth'});
}

links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({behavior: 'smooth'});
    }
}

buttons = document.getElementsByClassName('product-button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById('order').scrollIntoView({behavior: 'smooth'});
    }
}

burger = document.getElementById('burger');
name_ = document.getElementById('name_');
phone = document.getElementById('phone');
document.getElementById('order-action').onclick = function () {
    let hasError = false;

    [burger, name_, phone].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = 'red';
            hasError = true;
        } else {
            item.parentElement.style.background = '';
        }
    });

    if (!hasError) {
        [burger, name_, phone].forEach(item => {
            item.value = '';
        });
        alert('Спасибо за заказ! Мы скоро свяжемся с вами!')
    }
}

// изменение курса валют
prices = document.getElementsByClassName('products-item-price');
document.getElementById('change-currency').onclick = function (e) {
    let currentCurrency = e.target.innerText;

    let newCurrency = '$';
    let coefficient = 1;
    if (currentCurrency === '$') {
        newCurrency = '₽';
        coefficient = 89;
    } else if (currentCurrency === '₽') {
        newCurrency = 'BYN';
        coefficient = 3;
    }
    if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }
    e.target.innerText = newCurrency;

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute('data-base-price') * coefficient).toFixed(1) + ' ' + newCurrency;
    }

}

