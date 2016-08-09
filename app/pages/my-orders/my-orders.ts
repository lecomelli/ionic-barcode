import {Component} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";

import {OrderService} from "../../services/order-service";
import {Order} from "../../services/order";

@Component({
    templateUrl: 'build/pages/my-orders/my-orders.html',
    providers: [OrderService]
})
export class MyOrdersPage {

    orders:Order[];
    
    constructor(public navParams: NavParams,public viewCtrl: ViewController, private orderService:OrderService) {
    }

    ngOnInit(){
        this.orderService.findAll().subscribe(orders => { this.orders = orders; });
    }

}