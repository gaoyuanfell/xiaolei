import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Http, HttpModule} from "@angular/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { SlideImgComponent } from './slide-img/slide-img.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ProductComponent } from './product/product.component';
import { PostageComponent } from './postage/postage.component';
import { ApplicationComponent } from './application/application.component';
import { CustomerComponent } from './customer/customer.component';
import { AboutComponent } from './about/about.component';

export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        IndexComponent,
        SlideImgComponent,
        ProductComponent,
        PostageComponent,
        ApplicationComponent,
        CustomerComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [Http]
            }
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
