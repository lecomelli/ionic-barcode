import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {ScanService} from "../../services/scan-service";

@Component({
    templateUrl: 'build/pages/welcome/welcome.html',
    providers: [ScanService]
})
export class WelcomePage {

    constructor(private nav:NavController, private scanService:ScanService) {

    }

    scan() {
        this.scanService.scan(this.nav);
    }

}