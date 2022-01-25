const phones = [ 
    {
        id: 1,
        name: "iPhone",
        maker: "Apple",
        operatingSystem: "iOS",
        price: 900,
        weight: 1.2
    },

    {
        id: 2,
        name: "Galaxy",
        maker: "Samsung",
        operatingSystem: "Android",
        price: 600,
        weight: 1.4
    }
];

const pixel = {
    id: 3,
    name: "Pixel",
    maker: "Google",
    operatingSystem: "Android",
    price: 750,
    weight: 1.3
}

phones.push(pixel)

const blackberry = {
    id: 4,
    name: "Blackberry",
    maker: "RIM (RIP)",
    operatingSystem: "Blackberry OS",
    price: 50,
    weight: 1.2
}

const winPhone = {
    name: "Windows Phone",
    maker: "Microsoft",
    operatingSystem: "Windows Phone OS",
    price: 50,
    weight: 1.0
}

const addPhoneToInventory = (phoneObject) => {
    const lastIndex = phones.length - 1
    const currentLastPhone = phones[lastIndex]
    const maxId = currentLastPhone.id
    const idForNewPhone = maxId + 1

    phoneObject.id = idForNewPhone
    phones.push(phoneObject)
}

addPhoneToInventory(winPhone)

for (const phone of phones) {
    console.log(`The ${phone.maker} ${phone.name} costs ${phone.price} dollars. It weighs ${phone.weight} grams`)
}

console.log(phones)
// const phoneToFind = 4

// for (const phone of phones) {
//     if (phone.id === phoneToFind) {
//     phone.weight = phone.weight + 0.4
//     phone.price = phone.price * 1.05
//     console.log(`The ${phone.maker} ${phone.name} costs ${phone.price} dollars. It weighs ${phone.weight} grams.`)
//     }     
// }