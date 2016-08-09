import {CreditCard} from "./credit-card";

export class User {
    id:number;
    name:string;
    address:string;
    phone:string;
    email:string;
    pic:string;
    creditCards:CreditCard[];
}