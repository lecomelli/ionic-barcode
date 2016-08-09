import {Injectable} from "@angular/core";
import {SELLER} from "./sellers-mock";

@Injectable()
export class SellerService {

    findAll() {
        return Promise.resolve(SELLER);
    }

    findById(id) {
        return Promise.resolve(SELLER[id - 1]);
    }

}