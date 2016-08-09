import {Component} from "@angular/core";
import {NavController, NavParams, Alert, ActionSheet} from "ionic-angular";
import {Product} from "../../services/product";
import {ProductService} from "../../services/product-service";
import {SellerDetailsPage} from "../seller-details/seller-details";
import {ShopActionModal} from "../shop-action/shop-action";

@Component({
    templateUrl: 'build/pages/product-details/product-details.html',
    providers: [ProductService]
})

export class ProductDetailsPage {

    product:Product;
    gtin:string;

    constructor(private nav:NavController, private  navParams:NavParams, private productService:ProductService) {
        this.gtin = navParams.get('gtin');

    }

    ngOnInit() {
        this.productService.findByGtin(this.gtin).subscribe(product => {
            this.product = product;
            this.navParams.get('loading').dismiss();
        });
    }

    showSeller(event, seller) {
        this.nav.push(SellerDetailsPage, {sellerId: seller.id});
    }

    favorite(event, product) {

        this.productService.favorite(product);

        let alert = Alert.create({
            title: 'Favorito',
            subTitle: 'Producto adcionado a sua lista de favoritos',
            buttons: ['OK']
        });
        this.nav.present(alert);
    }


    like(event, product) {
        this.productService.like(product).subscribe(
            likes => {
                product.likes = likes;
            }
        );
    }

    buy(event, product, seller) {
        this.nav.push(ShopActionModal, {product: product, seller: seller});
    }

    share(event, product) {
        let actionSheet = ActionSheet.create({
            buttons: [
                {
                    text: 'Text',
                    handler: () => {
                        console.log('Text clicked');
                    }
                },
                {
                    text: 'Email',
                    handler: () => {
                        console.log('Email clicked');
                    }
                },
                {
                    text: 'Facebook',
                    handler: () => {
                        console.log('Facebook clicked');
                    }
                },
                {
                    text: 'Twitter',
                    handler: () => {
                        console.log('Twitter clicked');
                    }
                },
                {
                    text: 'Cancel',
                    style: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        this.nav.present(actionSheet);
    }


}