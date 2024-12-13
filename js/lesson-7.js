// 1
let array = [1, 2, 3];
array[2] = 10;

// 2
let array2 = ["banana", "air", "Four"];
array2[3] = "Авокадо";

// 3
let array3 = [10, 10, 10];
const result = array3[0] + array3[1] + array3[2];

// 4
const array4 = [1, 20, 3, 40, 5];
for (let i = 0; i < array4.length; i++) { 
    console.log(array4[i]);
};

// 5
const array5 = ["Cat", "Tree", "Bright", "Dog", "Planet"];
for (let i = 0; i < array5.length; i++) { 
    if (array5[i].length > 5) { 
        console.log(array5[i]);
    }; 
};

// 6
const array6 = [7, 2, 14, 39, 85, 53, 61, 9, 28, 30];
console.log(Math.max(...array6));

// 7
const array7 = [28, 15, 42, 53, 68, 17, 80, 91, 24, 36];
for (let i = 0; i < array7.length; i++) {
    if (i % 2 === 0) { 
        console.log(array7[i]);
    }
};