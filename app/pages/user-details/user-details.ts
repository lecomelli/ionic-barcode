import {Component} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";

import {UserService} from "../../services/user-service";
import {User} from "../../services/user";

@Component({
    templateUrl: 'build/pages/user-details/user-details.html',
    providers: [UserService]
})
export class UserDetailsPage {

    user:User;
    
    constructor(public navParams: NavParams,public viewCtrl: ViewController, private userService:UserService) {
    }

    ngOnInit(){
        this.userService.getLoggedUser().subscribe(user => { this.user = user; });
    }

}