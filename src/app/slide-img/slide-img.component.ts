import {Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, ViewChild} from '@angular/core';
import {fadeIn} from "../basic/animations/fade-in";
import {reject} from "q";

@Component({
    selector: 'app-slide-img',
    exportAs: 'slideImg',
    templateUrl: './slide-img.component.html',
    styleUrls: ['./slide-img.component.less'],
    animations: [fadeIn],
})
export class SlideImgComponent implements OnInit, OnChanges {

    ngOnChanges(changes: SimpleChanges): void {
        console.info();
        let list = changes.list.currentValue;
        if (list && list.length > 0) {
            list.forEach(d => {
                this.listImg.push({
                    url: d,
                    selected: false
                })
            });
            this.listImg[0].selected = true;
            this.cacheImg(this.listImg);
        }

        this.getImgWH(this.listImg[0].url).then( ({width,height}) => {
            this._renderer.setStyle(this.carouselBox.nativeElement,'padding-bottom',`${(height / width)*100}%`)
        } )
    }

    constructor(private _renderer:Renderer2) {
    }

    ngOnInit() {
        this.autoPlay();
        this._renderer.setStyle(this.carouselBox.nativeElement,'padding-bottom',`${(this.height / this.width)*100}%`)
    }

    getImgWH(url:string){
        let img = new Image();
        img.src = url;
        return new Promise( (resolve,reject) => {
            img.onload = function () {
                resolve({
                    width:img.width,
                    height:img.height
                })
            }
            img.onerror = function (error) {
                reject(error);
            }
        } )
    }

    push(img: string, index: number = this.list.length) {
        let i = this.list.length;
        if (index > i) {
            throw 'index 不能大于实际长度';
        }
        this.list.splice(index, 0, img);
        this.init();
    }

    init() {
        this.autoPlay();
        this.listImg = [];
        this.list.forEach(d => {
            this.listImg.push({
                url: d,
                selected: false
            })
        });
        if (!this.listImg[this.index]) {
            this.index = 0;
        }
        this.listImg[this.index].selected = true;
    }

    private index = 0;//当前活动的下标
    private timer: any = 0;//定时器
    private _listImg = [];
    get listImg() {
        return this._listImg;
    }

    set listImg(val) {
        this._listImg = val;
    }

    @Input('list') list;
    @Input('time') time = 3000;
    @Input('ctrl') ctrl = true;
    @Input('width') width = 0;
    @Input('height') height = 0;
    @ViewChild('carouselBox') carouselBox:ElementRef;

    selected(m) {
        this.autoPlay();
        this.listImg.forEach(d => {
            d.selected = false;
        });
        m.selected = true;
    }

    autoPlay() {
        if (!this.time) return;
        if (this.timer) clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.next()
        }, this.time)
    }

    pop() {
        this.autoPlay();
        let index = this.listImg.findIndex((d) => {
            return d.selected
        });
        if (index != 0) {
            this.listImg[index].selected = false;
            this.listImg[index - 1].selected = true;
        } else {
            this.listImg[index].selected = false;
            this.listImg[this.listImg.length - 1].selected = true;
        }
        this.index = index - 1;
        return this.index
    }

    next() {
        this.autoPlay();
        let index = this.listImg.findIndex((d) => {
            return d.selected
        });
        if (index != this.listImg.length - 1) {
            this.listImg[index].selected = false;
            this.listImg[index + 1].selected = true;
        } else {
            this.listImg[index].selected = false;
            this.listImg[0].selected = true;
        }
        this.index = index + 1;
        return this.index
    }

    cacheImg(array){
        this.listImg.forEach((data)=>{
            let img = new Image();
            img.src = data.url;
        })
    }
}
