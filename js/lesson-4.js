// 1


// 2
const number = 100;
if (number <= 10) {
    alert("Сума менша або дорівнює 10");
} else if (number > 10) {
    alert("Сума більша за 10")
}

// 3
const text = prompt("Напиши текст")
if (text.includes("JavaScript")) {
    alert("Текст містить слово JavaScript");
} else {
    alert("Текст не містить слово JavaScript");
}

// 4
const numb = prompt("Напиши число")
if (numb >= 10 && numb <= 20) {
    alert("Число входить в діапазон від 10 до 20");
} else {
    alert("Число не входить в діапазон від 10 до 20");
}

// 5
const userName = prompt("Ім'я");
const email = prompt("email");
const pass = prompt("Пароль")
if (userName.length >= 3 && email.includes("@") && email.includes(".") && pass.length > 6) {
    alert("Неправильно написано имя, почта или пароль")
} else { alert("Все правильно")}