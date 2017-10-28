import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {fadeIn} from "../basic/animations/fade-in";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
    animations: [fadeIn],
})
export class HeaderComponent implements OnInit {

    constructor(private translate: TranslateService) {
        this.changeZh();
    }

    isZh = true;

    changeZh() {
        this.translate.setDefaultLang('zh');
        this.translate.use('zh');
        this.isZh = true;
    }

    changeEn() {
        this.translate.setDefaultLang('en');
        this.translate.use('en');
        this.isZh = false;
    }

    menu: any = [
        {
            name: '首页',
            link: 'index',
        },
        {
            name: '产品及解决方案',
            link: 'product',
            childList: [
                {name: '领科的模块产品', link: 'product', params: {id: 1}},
                {name: 'softsim解决方案', link: 'product', params: {id: 2}},
                {name: '链接管理解决方案', link: 'product', params: {id: 3}},
            ]
        },
        {
            name: '资费以及服务',
            link: 'postage',
            childList: [
                {name: '亚洲', link: 'postage', params: {id: 1}},
                {name: '欧洲', link: 'postage', params: {id: 2}},
                {name: '北美洲', link: 'postage', params: {id: 3}},
                {name: '南美洲', link: 'postage', params: {id: 4}},
                {name: '大洋洲', link: 'postage', params: {id: 5}},
            ]
        },
        {
            name: '应用领域',
            link: 'application',
            childList: [
                {name: '消费电子', link: 'application', params: {id: 1}},
                {name: '物流', link: 'application', params: {id: 2}},
                {name: '车联网', link: 'application', params: {id: 3}},
                {name: '智慧楼宇', link: 'application', params: {id: 4}},
                {name: '市政工程', link: 'application', params: {id: 5}},
            ]
        },
        {
            name: '关于我们',
            link: 'about',
        }
    ];


    ngOnInit() {
    }

}
