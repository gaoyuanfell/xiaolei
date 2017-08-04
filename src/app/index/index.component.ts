import {Component, OnInit, ViewChild} from '@angular/core';
import {SlideImgComponent} from "../slide-img/slide-img.component";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

    }

    @ViewChild('slideImg') slideImgRef:SlideImgComponent;

    list = [
        "assets/img/1.jpg",
        "assets/img/2.jpg",
    ]
}
