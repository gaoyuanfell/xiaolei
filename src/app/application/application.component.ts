import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-application',
    templateUrl: './application.component.html',
    styleUrls: ['./application.component.less']
})
export class ApplicationComponent implements OnInit {

    constructor(private _route: ActivatedRoute) {
        this._route.params.subscribe((data: any) => {
            this.dataType = data.id || 1;
            console.info(data);
        })
    }

    dataType = 1;

    ngOnInit() {
    }

}
