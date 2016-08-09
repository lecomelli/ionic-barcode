import {Component} from "@angular/core";
import {NavController, NavParams, Loading} from "ionic-angular";
import {Product} from "../../services/product";
import {ProductService} from "../../services/product-service";
import {ProductDetailsPage} from "../product-details/product-details";


@Component({
    templateUrl: 'build/pages/product-list/product-list.html',
    providers: [ProductService]
})
export class ProductListPage {

    products:Product[];

    constructor(private nav:NavController, private  navParams:NavParams, private productService:ProductService) {
    }

    getProducts() {
        this.productService.findAll().then(products => this.products = products);
    }

    ngOnInit() {
        this.getProducts();
    }

    itemTapped(event, product) {
        let loading = Loading.create({
            content: 'Please wait...'
        });
        this.nav.present(loading);
        this.nav.push(ProductDetailsPage, {gtin: product.gtin, loading: loading});
    }
}