import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ServicesDataService } from './services-data.service';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
    services: any[];

    constructor(private servicesDataService: ServicesDataService) {
        this.services = this.servicesDataService.services;
    }
}