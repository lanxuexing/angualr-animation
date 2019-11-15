import {
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';
import { Hero } from '../models/hero';

@Component({
    selector: 'app-hero-list-auto',
    templateUrl: 'hero-list-auto.component.html',
    styleUrls: ['../hero-list-page/hero-list-page.component.scss'],
    animations: [
        trigger('shrinkOut', [
            state('in', style({ height: '*' })),
            transition('* => void', [
                style({ height: '*' }),
                animate(250, style({ height: 0 }))
            ])
        ])
    ]
})
export class HeroListAutoComponent {
    @Input() heroes: Hero[];

    @Output() remove = new EventEmitter<number>();

    removeHero(id: number) {
        this.remove.emit(id);
    }
}

