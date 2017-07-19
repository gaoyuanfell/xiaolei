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

        this.menu[0].name = '首页'
    }

    changeEn() {
        this.translate.setDefaultLang('en');
        this.translate.use('en');
        this.isZh = false;

        this.menu[0].name = 'Home'
    }

    menu: any = [
        {
            name: '首页',
            link: 'index',
        },
        {
            name: '产品及解决方案',
            link: '',
            childList: [
                {name: 'IOT XXX模块产品', link: 'product',params:{id:1}},
                {name: 'softsim解决方案', link: 'product',params:{id:2}},
                {name: '链接管理解决方案', link: 'product',params:{id:3}},
            ]
        },
        {
            name: '资费以及服务',
            link: '',
            childList: [
                {name: '亚洲', link: ''},
                {name: '欧洲', link: ''},
                {name: '美洲', link: ''},
                {name: '大洋洲', link: ''},
            ]
        },
        {
            name: '应用领域',
            link: '',
            childList: [
                {name: '消费电子', link: ''},
                {name: '物流', link: ''},
                {name: '车联网', link: ''},
                {name: '智慧楼宇', link: ''},
                {name: '市政工程', link: ''},
            ]
        },
        {
            name:'企业客户',
            link:'',
        },
        {
            name:'关于我们',
            link:'',
        }
    ];


    ngOnInit() {
    }

}
