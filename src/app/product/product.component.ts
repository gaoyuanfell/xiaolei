import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

    constructor(private _route:ActivatedRoute) {
        this._route.params.subscribe( data => {
            this.dataType = data.id;
            console.info(data);
        } )
    }

    dataType = 1;

    list = [
        "assets/img/1.jpg"
    ]

    ngOnInit() {
    }

}
