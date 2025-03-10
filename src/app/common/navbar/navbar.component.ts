import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {
    isSticky = false;
    navbarToggleClassApplied = false;

    navItems = [
        { path: '/', label: 'Home', fragment: "home" },
        { path: '/', label: 'Audits', fragment: 'audits' },
        { path: '/', label: 'About', fragment: 'about' },
        { path: '/', label: 'Features', fragment: 'features' },
        { path: '/', label: 'Services', fragment: 'services' },
        { path: '/', label: 'Contact Us', fragment: 'contact' }
    ];

    constructor(
        private viewportScroller: ViewportScroller,
        private router: Router
    ) {}

    @HostListener('window:scroll')
    checkScroll() {
        this.isSticky = window.pageYOffset > 20;
    }

    @HostListener('window:resize')
    checkResize() {
        if (window.innerWidth > 1024) {
            this.closeMenu();
        }
    }

    navbarToggleClass() {
        this.navbarToggleClassApplied = !this.navbarToggleClassApplied;
        document.body.style.overflow = this.navbarToggleClassApplied ? 'hidden' : '';
    }

    closeMenu() {
        this.navbarToggleClassApplied = false;
        document.body.style.overflow = '';
    }

    scrollToSection(fragment: string | null) {
        if (fragment) {
            // First navigate to the home page if not already there
            if (this.router.url !== '/') {
                this.router.navigate(['/'], { fragment: fragment }).then(() => {
                    // Give time for the page to load before scrolling
                    setTimeout(() => {
                        this.viewportScroller.scrollToAnchor(fragment);
                    }, 100);
                });
            } else {
                // If already on home page, just scroll to the section
                this.viewportScroller.scrollToAnchor(fragment);
            }
        } else {
            // If no fragment, navigate to the home page
            this.router.navigate(['/']);
        }
        
        // Close mobile menu if open
        this.closeMenu();
    }
}