// 1
const buttonElemet = document.querySelector(".button")
const handLeClick = function() {
    console.log("Hello World!");
};
buttonElemet.addEventListener('click', handLeClick)

// 2

let randomNumbers = Math.floor(Math.random() * 101);
let numbersPlayer = prompt("Угадайте число: 0 - 100")
let numb = parseInt(numbersPlayer);

if(numb === randomNumbers){
    alert(`Вы угадали: ${randomNumbers}`)
}else{alert(`Повезет в следующий раз: ${randomNumbers}`)};

// 3
const buttonElemet2 = document.querySelector(".button2")
const handLeClick2 = function() {
    console.log("");
};
buttonElemet2.addEventListener('click', handLeClick2)

// 4

const applyCallbackToEachElement = (arr, callback) => {
return callback(arr)
};

const arr = [1, 2, 3, 4, 5];
const squareCallback = (arr) => {
    let total = [];
    for(let i = 0; i < arr.length; i++){
        let a = arr[i] * arr[i];
        total.push(a)
    };
    return total;
};

const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result);

// 5 

const calculateDiscountedPrise = (prise, discount, callback) =>{
    return callback(prise, discount)
};

const showDiscountedPrise = (prise, discount) => {
    let newPrice = prise - (prise * discount) / 100;
    return newPrice;
};

const result2 = calculateDiscountedPrise(100, 10, showDiscountedPrise);
console.log(result2);