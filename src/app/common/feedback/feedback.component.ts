import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-feedback',
    imports: [CarouselModule, NgClass, NgIf],
    templateUrl: './feedback.component.html',
    styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {

	constructor (
		public router: Router
	) {}

    // Owl Carousel
    feedbackSlides: OwlOptions = {
		items: 1,
		margin: 0,
		loop: true,
		dots: true,
		nav: false,
		autoplay: true,
		mouseDrag: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
        navText: [
			"<i class='flaticon-left'></i>",
			"<i class='flaticon-right'></i>"
        ]
    }

}