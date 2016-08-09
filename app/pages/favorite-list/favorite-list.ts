import {Component} from "@angular/core";
import {NavController, NavParams, Loading} from "ionic-angular";
import {ProductDetailsPage} from "../product-details/product-details";
import {ProductService} from "../../services/product-service";
import {Product} from "../../services/product";


@Component({
    templateUrl: 'build/pages/favorite-list/favorite-list.html',
    providers: [ProductService]
})
export class FavoriteListPage {

    products:Product[];

    constructor(private nav:NavController, private  navParams:NavParams, private productService:ProductService) {

    }

    ngOnInit() {
        this.productService.getFavorites().subscribe(
            data => this.products = data
        );
    }

    itemTapped(event, product) {
        let loading = Loading.create({
            content: 'Please wait...'
        });
        this.nav.present(loading);
        this.nav.push(ProductDetailsPage, {gtin: product.gtin, loading: loading});
    }

    deleteItem(event, product) {
        this.productService.unfavorite(product);
    }

}