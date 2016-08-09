import {Order} from "./order";

export const ORDER:Order[] = [
    {
        id:1,
        status:"entrege",
        quantity:1,
        total:10,
        deliveryAddress:"R. Dr. César, 1234 - Santana, São Paulo - SP, 02013-004",
        user:{
            id: 1,
            name: "Carolina Agueda",
            address: "R. Dr. César, 1234 - Santana, São Paulo - SP, 02013-004",
            phone: "(11) 3055-6767",
            email: "carolina.agueda@gmail.com",
            pic: "./images/user/user.jpg",
            creditCards:[]
        },
        product:   {
            id: 1,
            gtin: '7640140337593',
            title: 'Saco para aspirador',
            description: 'Refil para aspirador de pó.',
            likes: 5,
            sellers: [],
            pic: './images/product/saco-415.png',
            thumb: './images/product/saco-80.jpg',
        },
        creditCard:{
            id:1,
            name:"Carolina Agueda",
            number:"**** **** **** 4444",
            expire: "12/12/2020",
            cvc: "444",
            type:"visa"
        },
        seller:{
            id: 4,
            name: "Casa do supiro",
            address: "Rua Alfredo Pujol, 1260 - Santana, São Paulo - SP, 02017-004",
            size: "Mini",
            phone: "(11) 2971-3623",
            latitude: "-23.501740",
            longitude: "-46.637438",
            email: "casadosuspiro@gmail.com",
            pic: "./images/seller/casa-do-suspiro-logo.jpg",
            thumb: "./images/seller/casa-do-suspiro-thumb.jpg",
            price: 'R$ 10,00',
            deliver: '3 horas',
            fare: 'R$ 5,00',
            pickup:false,
            distance: '0.4 km'
        },


}
];
