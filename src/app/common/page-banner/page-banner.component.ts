import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-page-banner',
    imports: [RouterLink, NgStyle],
    templateUrl: './page-banner.component.html',
    styleUrl: './page-banner.component.scss'
})
export class PageBannerComponent {

    constructor (
        public router: Router
    ) {}

    @Input() pageTitle: string = '';
    @Input() pageSubTitle: string = '';
    @Input() backgroundImage: string = '';

}