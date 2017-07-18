/**
 * Created by moka on 2017/7/7 0007.
 */
import {animate, style, transition, trigger} from '@angular/animations';

export const rotateAngle = trigger('rotateAngle', [
    transition('void => *', [
        style({height: 0}),
        animate(150, style({height: '*'}))
    ]),
    transition('* => void', [
        style({height: '*'}),
        animate(150, style({height: 0}))
    ])
]);
