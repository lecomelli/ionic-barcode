import {Seller} from "./seller";

export class Product {
    id:number;
    gtin:string;
    title:string;
    description:string;
    likes:number;
    sellers:Seller[];
    pic:string;
    thumb:string;
}