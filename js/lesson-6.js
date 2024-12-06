let i = 1;

// 1
let start = 1, final = 10;
while (start <= final) {
    console.log(start);
    start++
}

// 2 
for (i = 2; i <= 20; i += 2) { 
    // if (i === 3 || i === 5 || i === 7 || i === 9 || i === 11 || i === 13 || i === 15 || i === 17 || i === 19) { 
    //     continue;
    // }
    console.log(i);
}

// 3
for (i; i <= 10; i++) {
    console.log(i * 7);
 }

// 4
const summa = [1, 2, 3, 4, 5];
let a = 0;
while ( a < summa.length) {
    console.log(summa[a]);
    a++
};

// 5
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
while (i < array.length) {
    if (i === 6) {
        i++
        break;
    };
    console.log(array[i]);
    i++
};

// 6 Я не знаю привильно ли это, но возможно я не правильно понял условия, бо як
// можно вывести числа маньшие за n если n изначально >= n, тип код останавливается не начиная работу
for (let n = 10; n >= 0; n--){
    if (n >= 10) {
        break;
    }
    console.log(n);
}

// // 7
while (i <= 20) {
    if (i === 3 || i === 6 || i === 9 || i === 12 || i === 15 || i === 18) { i++; continue; }
    console.log(i);
    i++
}