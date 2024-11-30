// 1
const cofe = "Кава",tea = "Чай", juice = "Сік";
let drink = prompt(`Що ви будете пити? ${cofe}, ${tea}, ${juice}`)

switch (drink) {
    case "Кава":
        alert("Ви обрали каву")
        break;
    case "Чай":
        alert("Ви обрали чай")
        break;
    case "Сік":
        alert("Ви обрали сік")
        break;

    default:
        alert("Такого напою немае наразі")
        break;
}

// 2
let days = prompt("Напишіть день тижня");

switch (days) {
  case "Субота":
    alert("Вихідний");
    break;
  case "Неділя":
    alert("Вихідний");
    break;

    default:
      alert("Робочий день");
      break;
}

// 3
let month = parseInt(prompt("Введіть місяць"));

switch (month) {
  case 12:
  case 1:
  case 2:
    alert("Зима");
    break;
  case 3:
  case 4:
  case 5:
    alert("Весна");
    break;
  case 6:
  case 7:
  case 8:
    alert("Лето");
    break;
  case 9:
  case 1:
  case 11:
    alert("Осень");
    break;

  default:
    alert("Такого місяця нема");
}

// 4
let emountDays = parseInt(prompt("Введіть місяць"));

switch (emountDays) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert("В цьому місяці 31 день");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    alert("В цьому місяці 30 день");
    break;
  case 2:
    alert("В цьому місяці у нас тільки 28 день");
    break;
  default:
    alert("Такого місяця немае");
    break;
}

// 5
// Я тут ещё урезал код просто заместь else{ color = color.toLowerCase()} написал просто color = color.toLowerCase()
let color = prompt("Введіть колір");
if (color === null) {
  color = prompt("Це поле повинно бути заповнене, введить колир");
}
color = color.toLowerCase();

switch (color) {
  case "червоний":
    alert("Stop");
    break;
  case "жовтий":
    alert("Wait");
    break;
  case "зелений":
    alert("Running");
    break;

  default:
    alert("Я не придумал действие для этого цвета");
    break;
}

// 6
const number = parseFloat(prompt("Первое число (Можливо ділити на нуль)"));
const number2 = parseFloat(prompt("Второе число"));
const operator = prompt("Ведите оператора (+, -, /, *)");
let result;

switch (operator) {
  case "+":
    result = number + number2;
    alert(result);
    break;
  case "-":
    result = number - number2;
    alert(result);
    break;
  case "*":
    result = number * number2;
    alert(result);
    break;
  case "/":
    result = number / number2;
    alert(result);
    break;
  default:
    alert("Неправильно написан оператор");
}