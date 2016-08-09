import {Injectable,Component} from "@angular/core";
import {ORDER} from "./order-mock";
import {Order} from "./order";
import {Observable} from "rxjs/Observable";

@Injectable()
export class OrderService {


    findAll(){
        return Observable.create(observer => {
            observer.next(ORDER);
            observer.complete();
        });
    }

    addOrder(order:Order) {
        order.id = ORDER.length+1;
        order.status = "aberto";
        return Observable.create(observer => {
            observer.next(
                ORDER.push(order)
            );
            observer.complete();
        });
    }

}