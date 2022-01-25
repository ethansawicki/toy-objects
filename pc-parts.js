const pcParts = [
    {
        id: 1,
        part: "GPU",
        maker: "NVIDIA",
        model: "RTX 3090",
        price: 1499
    },
    {
        id: 2,
        part: "CPU",
        maker: "AMD",
        model: "5900X",
        price: 649
    },
    {
        id: 3,
        part: "R.A.M.",
        maker: "GSkill",
        model: "Trident Z 32Gb 3600MHZ",
        price: 250
    }
]

const psu = {
    part: "PSU",
    maker: "Seasonic",
    model: "750W Gold",
    price: 200
}

const mb = {
    part: "Motherboard",
    maker: "ASUS",
    model: "X570 Crosshair Hero",
    price: 449
}

const addPart = (partObject) => {
    const lastIndex = pcParts.length - 1
    const currentLastPart = pcParts[lastIndex]
    const maxId = currentLastPart.id
    const idForNewPart = maxId + 1

    partObject.id = idForNewPart
    pcParts.push(partObject)
}

addPart(psu)
addPart(mb)

for (const parts of pcParts) {
    const partById = 1
    if (parts.id === partById) {
    console.log(`The ${parts.part} is made by ${parts.maker}. The model is ${parts.model} and the price is ${parts.price} in USD.`)
    }   
}


