import {CreditCard} from "./credit-card";
import {User} from "./user";
import {Product} from "./product"
import {Seller} from "./seller"

export class Order {
    id:number;
    status:string;
    user:User;
    product:Product;
    seller:Seller;
    creditCard:CreditCard;
    quantity:number;
    deliveryAddress:string;
    total:number;
}