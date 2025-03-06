import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    imports: [NgIf],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {

    // Video Popup
	isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}