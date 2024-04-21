function validateNewForm() {
    var product = document.getElementById('product').value;
    var quantity = document.getElementById('quantity').value;
    var clientName = document.getElementById('client-name').value;
    var clientEmail = document.getElementById('client-email').value;
    var clientPhone = document.getElementById('client-phone').value;
    var deliveryDate = document.getElementById('delivery-date').value;
    var deliveryTime = document.getElementById('delivery-time').value;
    var paymentMethod = document.getElementById('payment-method').value;
    var additionalInfo = document.getElementById('additional-info').value;

    if (product.trim() === "") {
        alert("Введите название продукта/услуги");
        return false;
    }

    if (quantity.trim() === "" || isNaN(quantity)) {
        alert("Введите количество");
        return false;
    }

    if (clientName.trim() === "") {
        alert("Введите имя");
        return false;
    }

    if (clientEmail.trim() === "" || !isValidEmail(clientEmail)) {
        alert("Введите действительный Email адрес");
        return false;
    }

    if (clientPhone.trim() === "" || !isValidPhone(clientPhone)) {
        alert("Введите действительный номер телефона");
        return false;
    }

    if (deliveryDate.trim() === "" || !isValidDate(deliveryDate)) {
        alert("Введите действительную дату доставки в формате ДД.ММ.ГГГГ");
        return false;
    }

    if (deliveryTime.trim() === "" || !isValidTime(deliveryTime)) {
        alert("Введите действительное время доставки в формате ЧЧ:ММ");
        return false;
    }

    if (paymentMethod === "") {
        alert("Выберите способ оплаты");
        return false;
    }

    return true;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^\+[0-9]{11}$/.test(phone);
}

function isValidDate(date) {
    return moment(date, "DD.MM.YYYY", true).isValid();
}

function isValidTime(time) {
    return /^([01]\d|2[0-3]):([0-5]\d)$/.test(time);
}

// Блок изменения элементов css для четвертого задания

var firstElement = document.querySelector('.blocks img'); // Изображение "Первый блок"
var secondElement = document.querySelector('.main__title'); // Надпись: "Что Вам необходимо?"


firstElement.style.backgroundColor = 'red'; 
secondElement.style.fontSize = '36px'; 
secondElement.style.color = 'rgba(0, 0, 0, 0.5)';