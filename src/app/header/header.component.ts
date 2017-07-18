import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

    constructor(private translate: TranslateService) {
        translate.setDefaultLang('zh');
        translate.use('zh');
    }

    isZh = true;

    changeZh(){
        this.translate.setDefaultLang('zh');
        this.translate.use('zh');
        this.isZh = true;
    }
    changeEn(){
        this.translate.setDefaultLang('en');
        this.translate.use('en');
        this.isZh = false;
    }


    ngOnInit() {
    }

}
