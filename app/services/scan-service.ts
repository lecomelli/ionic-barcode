import {Injectable} from "@angular/core";
import {NavController, Loading, Alert} from "ionic-angular";
import {BarcodeScanner} from "ionic-native";
import {ProductDetailsPage} from "../pages/product-details/product-details";
import {WelcomePage} from "../pages/welcome/welcome";

@Injectable()
export class ScanService {

    scan(nav:NavController) {
        BarcodeScanner.scan().then((barcodeData) => {
                console.log(barcodeData);

                if (barcodeData.cancelled) {
                    nav.setRoot(WelcomePage);
                    return false;
                } else {
                    var gtin = '';
                    if (barcodeData.format === 'QR_CODE') {
                        if (barcodeData.text.startsWith('^1010')) {
                            gtin = barcodeData.text.substring(5, 18);

                        } else if (barcodeData.text.startsWith('010')) {
                            gtin = barcodeData.text.substring(3, 16);

                        }
                    } else if (barcodeData.format === 'EAN_13') {
                        gtin = barcodeData.text;

                    } else {
                        let alert = Alert.create({
                            title: 'Erro',
                            subTitle: 'Padrão não suporatdo.',
                            buttons: [
                                {
                                    text: 'Ok',
                                    handler: () => {
                                        console.log('Agree clicked');
                                        nav.setRoot(WelcomePage);
                                    }
                                }
                            ]
                        });
                        nav.present(alert);
                        nav.popToRoot();
                        return false;
                    }
                    let loading = Loading.create({
                        content: 'Please wait...'
                    });
                    console.log(gtin);
                    nav.present(loading);
                    nav.push(ProductDetailsPage, {gtin: gtin, loading: loading});
                }
            },(err) => {
                let
                    alert = Alert.create({
                        title: 'Erro',
                        subTitle: 'Não foi possível executar a leitura .',
                        buttons: [
                            {
                                text: 'Ok',
                                handler: () => {
                                    console.log('Agree clicked');
                                    nav.setRoot(WelcomePage);
                                }
                            }
                        ]
                    });
                nav.present(alert);

            }
        )
        ;
    }

}