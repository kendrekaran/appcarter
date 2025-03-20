import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ServicesDataService } from '../../common/services/services-data.service';
import { NavbarComponent } from '../../common/navbar/navbar.component';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  template: `
    <!-- Navbar -->
    <app-navbar></app-navbar>
    
    <!-- Main Content -->
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div class="container px-4 py-12 mx-auto">
        <!-- Back Button -->
        <div class="mb-6">
          <a [routerLink]="['/']" fragment="audits" 
             class="inline-flex items-center font-medium transition-colors text-primary hover:text-primary-dark">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Services
          </a>
        </div>

        <!-- Service Header -->
        <div class="p-8 mb-10 bg-white rounded-xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <div class="flex flex-col gap-8 items-center md:flex-row md:items-start">
            <div class="p-6 bg-opacity-10 rounded-full transition-transform duration-300 transform bg-primary hover:scale-105">
              <img [src]="service?.icon" [alt]="service?.title" class="object-contain w-24 h-24">
            </div>
            <div>
              <h1 class="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">{{service?.title}}</h1>
              <div class="mb-6 w-20 h-1 bg-primary"></div>
              <p class="max-w-3xl text-xl leading-relaxed text-gray-700">{{service?.description}}</p>
            </div>
          </div>
        </div>

        <!-- Features Section -->
        <div class="p-8 mb-10 bg-white rounded-xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <h2 class="mb-2 text-2xl font-bold text-gray-800">Key Features</h2>
          <div class="mb-6 w-16 h-1 bg-primary"></div>
          
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div *ngFor="let feature of featuresList" 
                 class="p-5 bg-gray-50 rounded-lg border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-primary hover:bg-gray-50">
              <div class="flex items-start">
                <div class="flex-shrink-0 mr-4">
                  <div class="p-2 bg-opacity-20 rounded-full bg-primary">
                    <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <p class="text-gray-700">{{feature}}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="p-10 text-center text-white bg-gradient-to-r rounded-xl shadow-md from-primary to-primary-dark">
          <h2 class="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
          <p class="mx-auto mb-8 max-w-2xl opacity-90">Contact our team to learn more about how our {{service?.title}} service can help improve your business operations.</p>
          <a [routerLink]="['/']" fragment="contact" 
             class="inline-block px-8 py-3 font-medium bg-white rounded-full shadow-lg transition-all duration-300 text-primary hover:shadow-xl hover:scale-105">
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ServiceDetailComponent implements OnInit {
  service: any;
  featuresList: string[] = [];
  
  constructor(
    private route: ActivatedRoute,
    private servicesDataService: ServicesDataService
  ) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const serviceId = params.get('id');
      if (serviceId) {
        this.loadServiceDetails(serviceId);
      }
    });
  }
  
  loadServiceDetails(serviceId: string): void {
    const service = this.servicesDataService.getServiceById(parseInt(serviceId, 10));
    if (service) {
      this.service = service;
      this.parseFeatures();
    }
  }
  
  parseFeatures(): void {
    if (this.service && this.service.features) {
      this.featuresList = this.service.features
        .split(/\d+\./)
        .filter((feature: string) => feature.trim())
        .map((feature: string) => feature.trim());
    }
  }
} 