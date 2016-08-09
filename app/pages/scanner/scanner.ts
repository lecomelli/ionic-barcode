import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {ProductService} from "../../services/product-service";
import {ScanService} from "../../services/scan-service";

@Component({
    templateUrl: 'build/pages/scanner/scanner.html',
    providers: [ProductService, ScanService]
})
export class ScannerPage {

    constructor(private nav:NavController, private  navParams:NavParams, private scanService:ScanService) {

    }

    ngOnInit() {
        this.scanService.scan(this.nav);
    }


    
}