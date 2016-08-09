import {User} from "./user";

export const USER:User[] = [
    {
        id: 1,
        name: "Carolina Agueda",
        address: "R. Dr. César, 1234 - Santana, São Paulo - SP, 02013-004",
        phone: "(11) 3055-6767",
        email: "carolina.agueda@gmail.com",
        pic: "./images/user/user.jpg",
        creditCards:[
            {
                id:1,
                name:"Carolina Agueda",
                number:"**** **** **** 5390",
                expire: "01/01/2021",
                cvc: "444",
                type:"visa"
            },
            {
                id:2,
                name:"Carolina Agueda",
                number:"**** **** **** 2847",
                expire: "08/12/2020",
                cvc: "555",
                type:"master"
            }
        ]
    }
];