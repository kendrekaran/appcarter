import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contact-us',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './contact-us.component.html'
})
export class ContactUsComponent {
    contactInfo = {
        email: 'buddy@appcarter.com',
        phone: '+91-9765159577'
    };
}
