// 1
const friends = ["Alex", "Denis", "Maksim"];

const logItems = function(array){
    let str = ' ';
    for(let i = 0; i < array.length; i++){
        str += `${" "} ${i + 1} - ${array[i]}`
    };
    
    return str;
};

console.log(logItems(friends));


// 2
const calculateEngravingPrice = function(message, pricePerWord) {
    const word = message.split(" ")
    const result = word.length * pricePerWord;
    return result
};

const result2 = calculateEngravingPrice(prompt("Введить слова"), prompt("Введить число"))
console.log(result2);

// 3 

const findLongestWord = function(string){
    const strSpit = string.split(" ");
    let strLonge = "";

    for(let i = 0; i < strSpit.length; i++){
        if(strSpit[i].length > strLonge.length){
            strLonge = strSpit[i]
        };
    };
    return strLonge;
};

const result = findLongestWord(prompt("Введите слова"));
console.log(result);

// 4

const formatString = function(string) {
    let str ='';
    string = Array.from(arguments);
    if(string[0].length > 40){
       let limiters = string[0].slice(0, 40)
        str += limiters + "..."
    } else{str += string};
   return str;
};

console.log(formatString(prompt("Введите слова")));

// 5

const checkForSpam = function(message){
    message = prompt("Введите слова")
    const msgSplit = message.split(" ")
    const spam = msgSplit.includes("spam")
    const sale = msgSplit.includes("sale")

    if(spam === true || sale === true){
        console.log(true);
        return true;
    } else{console.log(false); return false;};
};
checkForSpam()
// 6

let input = prompt("Введить число"), numbers = [], total = 0;
const parseInput = Number.parseInt(input);
numbers.push(parseInput);


if(input !== null){
    for(let i = 0; i < 1000; i++){
        if(input === null){
            numbers.pop();
            for(let i = 0; i < numbers.length; i++){ 
                total += numbers[i];
            };

            break;
        }else{ 
            input = prompt("Введить число");
            const parseInpute = Number.parseInt(input);
            numbers.push(parseInpute);
        };
    };
}
console.log(`Загальна сума чисел дорівнює: ${total}`);