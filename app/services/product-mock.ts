import {Product} from "./product";

export const PRODUCT:Product[] = [
    {
        id: 1,
        gtin: '7640140337593',
        title: 'Nespresso Ristretto',
        description: 'Um blend de Arábicas da América do Sul e da África Oriental, com um toque de Robusta, torrados separadamente para criar a sutil nota de frutas deste Espresso intenso e encorpado',
        likes: 5,
        sellers: [
            {
                id: 4,
                name: "Nespresso",
                address: "Rua Alfredo Pujol, 1260 - Santana, São Paulo - SP, 02017-004",
                size: "Mini",
                phone: "(11) 2971-3623",
                latitude: "-23.501740",
                longitude: "-46.637438",
                email: "casadosuspiro@gmail.com",
                pic: "./images/seller/nespresso.jpg",
                thumb: "./images/seller/nespresso.jpg",
                price: 'R$ 10,00',
                deliver: '2 dias',
                fare: 'R$ 5,00',
                pickup:false,
                distance: '0.4 km'
            },

           
        ],
        pic: './images/product/ristretto-415.jpg',
        thumb: './images/product/ristretto-80.jpg',
        
    },

    
];
