// Оголошуємо об'єкт для зберігання даних форми
const formData = {
  email: '',
  message: '',
};

// Вибір елементів форми
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Функція для оновлення локального сховища
function updateLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// Делегування події input для відстеження змін у полях форми
form.addEventListener('input', event => {
  const { name, value } = event.target;

  // Оновлюємо значення у formData
  formData[name] = value.trim();

  // Оновлюємо локальне сховище
  updateLocalStorage();
});

// Перевірка наявності даних у локальному сховищі
document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('feedback-form-state');

  if (savedData) {
    const parsedData = JSON.parse(savedData);

    // Заповнюємо форму значеннями з локального сховища
    emailInput.value = parsedData.email;
    messageInput.value = parsedData.message;

    // Оновлюємо об'єкт formData
    formData.email = parsedData.email;
    formData.message = parsedData.message;
  }
});

// Обробка сабміту форми
form.addEventListener('submit', event => {
  event.preventDefault();

  // Перевіряємо, чи всі поля заповнені
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  // Виводимо об'єкт formData в консоль
  console.log(formData);

  // Очищаємо локальне сховище
  localStorage.removeItem('feedback-form-state');

  // Очищаємо форму та об'єкт formData
  form.reset();
  Object.keys(formData).forEach(key => {
    formData[key] = '';
  });
});
