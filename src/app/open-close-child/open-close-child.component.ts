import { Component } from '@angular/core';
import { trigger, transition, state, animate, style } from '@angular/animations';

@Component({
    selector: 'app-open-close-child',
    templateUrl: 'open-close-child.component.html',
    styleUrls: ['open-close-child.component.scss'],
    animations: [
        trigger('childAnimation', [
            // ...
            state('open', style({
                width: '250px',
                opacity: 1,
                backgroundColor: 'yellow'
            })),
            state('closed', style({
                width: '100px',
                opacity: 0.5,
                backgroundColor: 'green'
            })),
            transition('* => *', [
                animate('1s')
            ]),
        ]),
    ],
})
export class OpenCloseChildComponent {
    isDisabled = false;
    isOpen = false;
    toggleAnimations() {
        this.isDisabled = !this.isDisabled;
    }

    toggle() {
        this.isOpen = !this.isOpen;
    }
}