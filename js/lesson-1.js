const age = 15;
const name = 'Denys |';
const isStudent = true;
const myString =
    "Любопытство никого не губило. Скорее наоборот, это одна из лучших вещей в жизни. — Джеймс Боуэн";
let myNumber = 10;
myNumber += 10;

const myNull = null;
console.log(age, isStudent, myNumber, myNull);
console.log(name, myString);

const userName = prompt("Введіть ваше ім'я:");
if (userName) {
  alert(`Привіт, ${userName}!`);
}