// 1
// const friends = ["Alex", "Denis", "Maksim"];

// const logItems = function(array){
//     let str = ' ';
//     for(let i = 0; i < array.length; i++){
//         str += `${" "} ${i + 1} - ${array[i]}`
//     };
    
//     return str;
// };

// console.log(logItems(friends));


// 2
// const calculateEngravingPrice = function(message, pricePerWord) {
//     const word = message.split(" ")
//     const result = word.length * pricePerWord;
//     return result
// };

// const result2 = calculateEngravingPrice(prompt("Введить слова"), prompt("Введить число"))
// console.log(result2);

// 3 

// 4

const formatString = function(string) {
    let str ='';
    string = Array.from(arguments);
    if(string[0].length > 40){
       let limiters = string[0].slice(0, 40)
        str += limiters
        str += "..."
    } else{str += string};
   return str;
};

console.log(formatString(prompt("Введите слова")));