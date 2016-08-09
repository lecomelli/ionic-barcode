import {Injectable} from "@angular/core";
import {PRODUCT} from "./product-mock";
import {Observable} from "rxjs/Observable";
import {Http, Headers, RequestOptions} from "@angular/http";
import "rxjs/add/operator/map";

let favorites = [];

@Injectable()
export class ProductService {

    static get parameters() {
        return [[Http]];
    }

    constructor(private http:Http) {
    }

    findAll() {
        return Promise.resolve(PRODUCT);
    }


    // findByGtin(gtin:string) {
    //     console.log(gtin);
    //
    //     var url = 'http://localhost:8080/rest/product/get?productId=' + gtin;
    //     var response = this.http.get(url, options).map(res => res.json());
    //     return response;
    // }


    findByGtin(gtin:string) {
        return Observable.create(observer => {
            // observer.next(PRODUCT.find(item => item.gtin === gtin));
            observer.next(PRODUCT[0]);
            observer.complete();
        });
    }

    getFavorites() {
        return Observable.create(observer => {
            observer.next(favorites);
            observer.complete();
        });
    }

    favorite(product) {
        let exists = false;
        for (let i = 0; i < favorites.length; i++) {
            if (favorites[i].gtin === product.gtin) {
                exists = true;
                break;
            }
        }
        if (!exists) favorites.push(product);
    }

    unfavorite(product) {

            for (let i = 0; i < favorites.length; i++) {
                if (favorites[i].gtin === product.gtin) {
                    favorites.splice(i, 1);
                    break;
                }
            }
    }

    like(product) {
        return Observable.create(observer => {
            PRODUCT[product.id - 1].likes++;
            observer.next(PRODUCT[product.id - 1].likes);
            observer.complete();
        });
    }

}