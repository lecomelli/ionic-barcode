import {Component} from "@angular/core";
import {NavController, NavParams, ViewController, Alert} from "ionic-angular";
import {Order} from "../../services/order";
import {UserService} from "../../services/user-service";
import {CreditCard} from "../../services/credit-card";
import {OrderService} from "../../services/order-service";
import {ProductService} from "../../services/product-service";
import {WelcomePage} from "../welcome/welcome";


@Component({
    templateUrl: 'build/pages/shop-action/shop-action.html',
    providers: [UserService,OrderService,ProductService]
})
export class ShopActionModal {

    order:Order;
    creditCards:CreditCard[];
    price:number;

    constructor(private nav:NavController, private navParams:NavParams, private viewCtrl:ViewController, private userService:UserService, private orderService:OrderService, private productService:ProductService ) {
        let product = navParams.get('product');
        let seller = navParams.get('seller');
        this.order = new Order();
        this.order.product = product;
        this.order.seller = seller;
        this.price = Number(seller.price.replace(/[^0-9,]+/g, "").replace(/,/g, "."));
        this.order.quantity = 1;
        this.order.total = this.order.quantity * this.price;
        
    }

    ngOnInit() {
        this.userService.getLoggedUser().subscribe(user => {
            this.order.user = user;
            this.order.deliveryAddress = user.address;
            this.order.creditCard = user.creditCards[0];

        });
    }

    sendOrder(event, order) {
        console.log('Order',order);
        this.productService.favorite(order.product);
        this.orderService.addOrder(order).subscribe( order => {
            
            var message = '<div style=\"text-align: center;\"><img  src=\"images/final-check-mark.gif\"/><br/> Pedido:'+ order + '</div>';
            let confirm = Alert.create({
                title: 'Pedido concluído',
                message: message,
                cssClass : 'center-align',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            this.nav.setRoot(WelcomePage);
                        }
                    }
                ]
            });
            this.nav.present(confirm);
        });
    }

    recalculate(event) {
        let value = event.target.value;
        this.order.total = value * this.price;
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}