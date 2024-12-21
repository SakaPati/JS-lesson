// 1
const friends = ["Alex", "Denis", "Maksim"];

let string = '';

for (let i = 0; i < friends.length; i++) {
    string += friends[i];
};
const result = friends.join(", ")
console.log(result);

// 2
const cards = [
    "Карточка-1",
    "Карточка-2",
    "Карточка-3",
    "Карточка-4",
    "Карточка-5"
];

const cardToRemove = cards.splice(2, 1)
const cardToInsert = cards.splice(5, 0, "Карточка-6")
const cardToUpdata = cards.splice(3, 0, "Updata")

console.log(cards);