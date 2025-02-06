// 1
// const user = {
//     hobby: "null",
//     premium: true
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);
// for(let key of keys){
// console.log(`${key}: ${user[key]}`);
// }

// 2
// const countProps = (obj) =>{
// obj = {
//     color: "Red",
//     banana: "No Banana..."
// }

// const keyy = Object.keys(obj)
// console.log(`Ключи: ${keyy.length}`);
// return key
// }
// countProps()

// 3

// const findBestEmployee = (employees) =>{
//     employees = {
//         Dengi: 10,
//         Egor: 45,
//         Danil: 12,
//         Roman: 67,
//         Vika: 51,
//         Artem: 136
//     };

//     const maxValue = Math.max(...Object.values(employees))

//     for(const [key, value] of Object.entries(employees)){
//         if(value === maxValue){
//             console.log(`${key}: ${value}`);
//         };    
//     };
// }

// findBestEmployee();

// 4

// const countTotalSalary = (employees) =>{
//     employees = {
//         Danichka: 2500,
//         Vasy: 1500,
//         Denis: 614,
//         Dima: -1500 // штрафы
//     }

//     const numberTotal = Object.values(employees);
//     let total = 0;

//     for(const [key, value] of Object.entries(employees)){
//         console.log(`${key}: ${value}`);
//     }
//     for(let i = 0; i < numberTotal.length; i++){
//         total+=numberTotal[i]
//     }
//     console.log(`Загальна сумма: ${total}`);
// }

// countTotalSalary()

// 5 НЕ СДЕЛАЛ

// const nameArray = [
//     {name: "Kostya", value: 12500},
//     {name: "Danya", value: 23512},
//     {name: "Denis", value: 1555}   
// ];

// const getAllPropValues = (arr, prop) => {
//     if(prop === value){
//         console.log("asfasfasf");
//     }
//     if(prop === arr.name){
        
//     }
// };

// getAllPropValues(nameArray, value)

// 6 

// const teamProdcuts = [
//     {name: "Банан", price: 80},
//     {name: "Огурец", price: 215},
// ]

// const calculateTotalPrice = (allProdcuts, productName) =>{
//     if(productName === "Банан"){
//         const nameProduct = allProdcuts[0].name
//         const price = allProdcuts[0].price;
//         const quantity = Number.parseInt(prompt("Введите сколько вы хотите купить"))
//         const totalPrice = price*quantity
//         console.log(`Продукт: ${nameProduct}(количество: ${quantity}) \n Ценна: ${price} \n общая цена: ${totalPrice}`);
//     }else if(productName === "Огурец"){
//         const nameProduct = allProdcuts[1].name
//         const price = allProdcuts[1].price;
//         const quantity = Number.parseInt(prompt("Введите сколько вы хотите купить"))
//         const totalPrice = price*quantity
//         console.log(`Продукт: ${nameProduct}(количество: ${quantity}) \n Ценна: ${price} \n общая цена: ${totalPrice}`);
//     }
// }

// calculateTotalPrice(teamProdcuts, prompt("Что хотите купить? Банан, Огурец"))

// 7
let deposit = document.getElementById("deposit");
let withdraw = document.getElementById("withdraw");

const bankAccount = () => {
    const account = {
        name: "Denis",
        id: 214,
        balance: 10000,
        passwor: "Den!s123",
        deposit: function () {
            const number = 100;
            this.balance += number
            console.log(`Твой баланс составляет: ${this.balance}`);
        },
        withdraw: function () {
            const number = 100;
            this.balance -= number
            console.log(`Твой баланс составляет: ${this.balance}`);
        },
        
    };
    deposit.addEventListener("click", () => account.deposit());
    withdraw.addEventListener("click", () => account.withdraw())
}
bankAccount()