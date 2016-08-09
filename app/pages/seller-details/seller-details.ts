import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {Seller} from "../../services/seller";
import {SellerService} from "../../services/seller-service";

@Component({
    templateUrl: 'build/pages/seller-details/seller-details.html',
    providers: [SellerService]

})
export class SellerDetailsPage {

    seller:Seller;
    sellerId:number;
    
    constructor(private nav:NavController, private  navParams:NavParams, private sellerService:SellerService) {
        this.sellerId = navParams.get('sellerId');
    }

    ngOnInit() {
        this.sellerService.findById(this.sellerId).then(seller => this.seller = seller);
    }


}
