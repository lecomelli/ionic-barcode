import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {SellerDetailsPage} from "../seller-details/seller-details";
import {Seller} from "../../services/seller";
import {SellerService} from "../../services/seller-service";

@Component({
    templateUrl: 'build/pages/seller-list/seller-list.html',
    providers: [SellerService]
})

export class SellerListPage {

    sellers:Seller[];

    constructor(private nav:NavController, private  navParams:NavParams, private sellerService:SellerService) {

    }

    ngOnInit() {
        this.sellerService.findAll().then(data => this.sellers = data);
    }

    itemTapped(event, seller) {
        this.nav.push(SellerDetailsPage, {
            sellerId: seller.id
        });
    }

}