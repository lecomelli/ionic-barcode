import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {USER} from "./user-mock";

@Injectable()
export class UserService {

    getLoggedUser() {
        return Observable.create(observer => {
            observer.next(USER[0]);
            observer.complete();
        });
    }

}
