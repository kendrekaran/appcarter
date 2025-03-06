import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-navbar',
    imports: [RouterLink, RouterLinkActive, NgClass],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

    constructor(
        public router: Router
    ) {}

    // Navbar Sticky
    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

    // Navbar Toggle Class
    navbarToggleClassApplied = false;
    navbarToggleClass() {
        this.navbarToggleClassApplied = !this.navbarToggleClassApplied;
    }

    // Search Toggle Class
    searchClassApplied = false;
    searchToggleClass() {
        this.searchClassApplied = !this.searchClassApplied;
    }

    // Sidebar Modal Toggle Class
    sidebarModalClassApplied = false;
    sidebarModalToggleClass() {
        this.sidebarModalClassApplied = !this.sidebarModalClassApplied;
    }

}