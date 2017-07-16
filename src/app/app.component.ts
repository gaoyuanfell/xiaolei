import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
    constructor(private translate: TranslateService){
        translate.setDefaultLang('en');
        translate.use('en');
    }

    private isEn = true;
    change(){
        if(this.isEn){
            this.translate.setDefaultLang('zh');
            this.translate.use('zh');
            this.isEn = false;
        }else{
            this.translate.setDefaultLang('en');
            this.translate.use('en');
            this.isEn = true;
        }
    }
}
