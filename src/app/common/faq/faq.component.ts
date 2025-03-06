import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-faq',
    imports: [NgClass],
    templateUrl: './faq.component.html',
    styleUrl: './faq.component.scss'
})
export class FaqComponent {

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