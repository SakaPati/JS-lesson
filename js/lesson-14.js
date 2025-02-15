// 1

const users = [
    {name: "Denis",
     age: 12,
     gender: "male",
     eyeColor: "green",
     isActive: false,
     email: "denis@gmail.test"   
    },
    {name: "Kazak",
     age: 76,
     gender: "male",
     eyeColor: "green",
     isActive: false,
     email: "kazak@gmail.test"   
    },
    {name: "Maks",
     age: 23,
     gender: "male",
     eyeColor: "blue",
     isActive: false,
     email: "maks@gmail.test"   
    },
    {name: "Nastya",
     age: 19,
     gender: "female",
     eyeColor: "black",
     isActive: true,
     email: "nastya@gmail.test"   
    }
]

const names = users.map(user => 
    user.name
)

console.log(names);

// 2

const eyeColors = (color) => {
    return users.filter(user =>
        user.eyeColor === color
    )
}

console.log(eyeColors('green'));

// 3

const genders = (gender) => {
    return users.filter(user =>
        user.gender === gender
    )
}

console.log(genders("male"));

// 4

const isActives = (activ) => {
    return users.filter(user =>
        user.isActive === activ
    )
}

console.log(isActives(false));

// 5

const findEmail = (email) => {
    return users.find(user => 
        user.email === email
    )
}

console.log(findEmail("kazak@gmail.test"));

// 6

const ages = users.filter(user => 
    user.age >= 15 && user.age <= 80
)

console.log(ages);