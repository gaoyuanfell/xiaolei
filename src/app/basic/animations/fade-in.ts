import {animate, style, transition, trigger} from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
    transition('void => *', [
        style({opacity: 0}),
        animate(150, style({opacity: 1}))
    ]),
    transition('* => void', [
        animate(150, style({opacity: 0}))
    ])
]);