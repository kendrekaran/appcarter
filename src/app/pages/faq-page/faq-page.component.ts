import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';

import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-faq-page',
    imports: [NgClass, NavbarComponent, PageBannerComponent, FooterComponent, BackToTopComponent],
    templateUrl: './faq-page.component.html',
    styleUrl: './faq-page.component.scss'
})
export class FaqPageComponent {

    // Accordion
    contentHeight: number = 0;
    openSectionIndex: number = 0; // Set the first item as open by default
    toggleSection(index: number): void {
        if (this.openSectionIndex === index) {
            this.openSectionIndex = -1; // Close if the same section is clicked
        } else {
            this.openSectionIndex = index; // Open the clicked section
        }
    }
    isSectionOpen(index: number): boolean {
        return this.openSectionIndex === index;
    }

}