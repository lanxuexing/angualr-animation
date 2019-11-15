import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    template: `
        <p>
            Angular's animations library makes it easy to define and apply animation effects such as page and list transitions.
        </p>
    `
})
export class AboutComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}