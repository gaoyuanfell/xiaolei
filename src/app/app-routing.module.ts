import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {ProductComponent} from "./product/product.component";
import {PostageComponent} from "./postage/postage.component";
import {ApplicationComponent} from "./application/application.component";
import {CustomerComponent} from "./customer/customer.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
    {
        path: 'index',
        component: IndexComponent
    },
    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: 'postage',
        component: PostageComponent
    },
    {
        path: 'application',
        component: ApplicationComponent
    },
    {
        path: 'customer',
        component: CustomerComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: '/index',
        pathMatch: 'full',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
