// Функция для показа консультации
function showConsultation() {
    alert("Спасибо за вашу заявку! Наш менеджер свяжется с вами в течение часа.");
}

// Обработка формы обратной связи
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Ваше сообщение отправлено! Мы ответим вам в ближайшее время.");
    this.reset();
});

// Простая валидация email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}