import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-partners',
    imports: [CarouselModule],
    templateUrl: './partners.component.html',
    styleUrl: './partners.component.scss'
})
export class PartnersComponent {

    // Owl Carousel
    partnerSlides: OwlOptions = {
		loop: true,
		nav: false,
		dots: false,
		smartSpeed: 2000,
		margin: 30,
		autoplayHoverPause: true,
		autoplay: true,
        navText: [
			"<i class='flaticon-left'></i>",
			"<i class='flaticon-right'></i>"
        ],
		responsive: {
			0: {
				items: 2
			},
			516: {
				items: 3
			},
			696: {
				items: 4
			},
			936: {
				items: 5
			}
		}
    }

}