import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet, Event } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

    title = 'Avrax - Technology Services & IT Company Angular 19 Template';

    constructor(
        public router: Router,
        private viewportScroller: ViewportScroller
    ) {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                // Check if there's a fragment in the URL
                const urlParts = event.urlAfterRedirects.split('#');
                if (urlParts.length > 1 && urlParts[1]) {
                    // If there's a fragment, scroll to that element
                    setTimeout(() => {
                        this.viewportScroller.scrollToAnchor(urlParts[1]);
                    }, 100);
                } else {
                    // If no fragment, scroll to the top
                    this.viewportScroller.scrollToPosition([0, 0]);
                }
            }
        });
    }

}