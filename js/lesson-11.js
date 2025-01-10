// 1
const bankAccount = {
    ownerName: "Denis",
    accountNumber: 922453,
    balance: 1000
};

const buttonDeposit = document.querySelector(".deposit");
const buttonWithdraw = document.querySelector(".withdraw");

const addMoney = () => {
    let money = prompt("Введить сумму поповнення"), parsePrompt = parseInt(money);
    let newBalance = bankAccount.balance += parsePrompt;
    console.log(newBalance);
};

const remoteMoney = () => {
    let money = prompt("Введить сумму зняття"), parsePrompt = parseInt(money);
    let newBalance = bankAccount.balance -= parsePrompt;
    console.log(newBalance);
};
buttonDeposit.addEventListener("click", addMoney);
buttonWithdraw.addEventListener("click", remoteMoney);

// 2
const weather = {
    temperature: 0,
    humidity: 43,
    windSpeed: 10
};


window.saveAndShowValue = function () {
    const inputElement = document.getElementById('myInput');
    const value = inputElement.value; // значение инпута

    if(value >= weather.temperature){
        alert("Температура вище 0 градусів Цельсія")
        console.log(false);
        return false;
    } else{alert("Температура нижче 0 градусів Цельсія"); console.log(true); return true;};
};

// 3
const user = {
    name: "Denis",
    email: "test@example.com",
    password: "Asv$asf%%1sa"
};

const login = () => {
    if(user.email !== user.email){
        alert("Неправильный адрес электроной почты")
    } else if(user.password !== user.password){
        alert("Неправильный пароль")
    }else{alert("Все нормально брооо")};
};

// 4 
const movie = {
    title: "Описание фильма",
    director: "John Wick",
    year: 2025,
    rating: 10
};

const ratingsStar = () => {
    if(movie.rating <= 8){
        console.log(false);
        return false;
    } else{console.log(true); return true;};
};

const movieInfo = `Описание фильма: ${movie.title}\nРежиссёр: ${movie.director}\nГод выпуска: ${movie.year}\nРейтинг: ${movie.rating}`;

const buttonMovie = document.querySelector(".movies");
const infoMovie = () => {
    alert(movieInfo)
};
buttonMovie.addEventListener("click", infoMovie);