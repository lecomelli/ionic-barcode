import {Component, ViewChild} from "@angular/core";
import {ionicBootstrap, Platform, MenuController, Nav} from "ionic-angular";
import {StatusBar} from "ionic-native";
import {WelcomePage} from "./pages/welcome/welcome";
import {ScannerPage} from "./pages/scanner/scanner";
import {ProductListPage} from "./pages/product-list/product-list";
import {SellerListPage} from "./pages/seller-list/seller-list";
import {FavoriteListPage} from "./pages/favorite-list/favorite-list";
import {MyOrdersPage} from "./pages/my-orders/my-orders";


import {UserDetailsPage} from "./pages/user-details/user-details";

@Component({
    templateUrl: 'build/app.html'
})

class MyApp {
    @ViewChild(Nav) nav:Nav;
    rootPage:any = WelcomePage;
    pages:Array<{title:string, component:any, icon:string}>;

    constructor(private platform:Platform, private menu:MenuController) {
        this.initializeApp();
        this.pages = [
            {title: 'Bem vindo', component: WelcomePage, icon: "bookmark"},
            {title: 'Comprar', component: ScannerPage, icon: "barcode"},
            // {title: 'Produtos', component: ProductListPage, icon: "pricetags"},
            // {title: 'Mercados', component: SellerListPage, icon: "cart"},
            {title: 'Favoritos', component: FavoriteListPage, icon: "star"},
            {title: 'Meu perfil', component: UserDetailsPage, icon: "contact"},
            {title: 'Meu Pedidos', component: MyOrdersPage, icon: "cart"},
            
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            StatusBar.styleDefault();
        });
    }

    openPage(page) {
        this.menu.close();
        this.nav.setRoot(page.component);
    }
}

ionicBootstrap(MyApp);
