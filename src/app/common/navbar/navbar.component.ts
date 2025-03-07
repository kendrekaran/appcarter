import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/services-2', label: 'Services' },
        { path: '/projects-2', label: 'Projects' },
        { path: '/team', label: 'Team' },
        { path: '/faq', label: 'FAQ' }
    ];

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
}