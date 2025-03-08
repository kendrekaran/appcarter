import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-service-modal',
  standalone: true,
  imports: [NgIf, NgFor],
  template: `
    <div *ngIf="isOpen" class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center p-4 z-50">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-4xl transform transition-all max-h-[90vh] overflow-auto">
        <!-- Header -->
        <div class="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <img [src]="service?.icon" [alt]="service?.title" class="w-12 h-12 object-contain">
            <h2 class="text-2xl font-bold text-gray-800">{{service?.title}}</h2>
          </div>
          <button 
            class="text-gray-500 hover:text-gray-700 transition-colors duration-200 focus:outline-none"
            (click)="close()"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Content -->
        <div class="p-6 space-y-8">
          <!-- Description Section -->
          <div class="bg-blue-50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-blue-900 mb-3">Overview</h3>
            <p class="text-blue-800">{{service?.description}}</p>
          </div>

          <!-- Features Section -->
          <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Key Features</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div *ngFor="let feature of getFeaturesList(service?.features)" 
                   class="flex items-start space-x-3 bg-white p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">{{feature}}</span>
              </div>
            </div>
          </div>

          <!-- Benefits Section -->
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Benefits</h3>
            <ul class="space-y-3">
              <li class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-gray-700">Improved efficiency and productivity</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-gray-700">Real-time monitoring and reporting</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-gray-700">Streamlined workflow management</span>
              </li>
            </ul>
          </div>

          <!-- Contact Section -->
          <div class="bg-gray-100 rounded-lg p-6 mt-6">
            <div class="flex justify-between items-center">
              <div>
                <h4 class="text-lg font-semibold text-gray-800">Interested in this service?</h4>
                <p class="text-gray-600">Contact us for more information</p>
              </div>
              <button class="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ServiceModalComponent {
  @Input() service: any;
  @Input() isOpen = false;
  @Output() modalClosed = new EventEmitter<void>();

  close() {
    this.isOpen = false;
    this.modalClosed.emit();
  }

  getFeaturesList(features: string): string[] {
    if (!features) return [];
    return features.split(/\d+\./).filter(feature => feature.trim()).map(feature => feature.trim());
  }
}