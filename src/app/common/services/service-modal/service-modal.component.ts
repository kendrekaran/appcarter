import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-service-modal',
  standalone: true,
  imports: [NgIf, NgFor],
  template: `
    <div *ngIf="isOpen" 
         class="flex fixed inset-0 z-50 justify-center items-center p-4 bg-black bg-opacity-60 backdrop-blur-sm animate-fadeIn"
         (click)="closeOnBackdrop($event)">
      <div class="bg-white rounded-xl shadow-2xl w-full max-w-4xl transform transition-all max-h-[90vh] overflow-auto animate-scaleIn">
        <!-- Header -->
        <div class="flex sticky top-0 z-10 justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
          <div class="flex items-center space-x-4">
            <div class="p-3 bg-opacity-10 rounded-full bg-primary">
              <img [src]="service?.icon" [alt]="service?.title" class="object-contain w-12 h-12">
            </div>
            <h2 class="text-2xl font-bold text-gray-800">{{service?.title}}</h2>
          </div>
          <button 
            class="p-2 text-gray-500 bg-gray-100 rounded-full transition-colors duration-200 hover:text-gray-700 focus:outline-none hover:bg-gray-200"
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
          <div class="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 shadow-sm border-primary">
            <h3 class="mb-3 text-xl font-semibold text-blue-900">Overview</h3>
            <p class="text-lg text-blue-800">{{service?.description}}</p>
          </div>

          <!-- Features Section -->
          <div>
            <div class="flex items-center mb-6">
              <div class="flex justify-center items-center mr-3 w-10 h-10 bg-opacity-10 rounded-full bg-primary">
                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800">Key Features</h3>
            </div>
            
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div *ngFor="let feature of getFeaturesList(service?.features); let i = index" 
                   class="flex items-start p-4 space-x-3 bg-white rounded-lg border border-gray-100 transition-shadow hover:shadow-md animate-fadeIn"
                   [style.animation-delay]="i * 50 + 'ms'">
                <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">{{feature}}</span>
              </div>
            </div>
          </div>

          <!-- Benefits Section -->
          <div class="p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl shadow-sm">
            <div class="flex items-center mb-6">
              <div class="flex justify-center items-center mr-3 w-10 h-10 bg-blue-500 bg-opacity-10 rounded-full">
                <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800">Benefits</h3>
            </div>
            
            <ul class="space-y-4">
              <li class="flex items-center space-x-3 animate-fadeIn" style="animation-delay: 100ms">
                <div class="flex justify-center items-center w-8 h-8 bg-blue-500 bg-opacity-10 rounded-full">
                  <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span class="text-gray-700">Improved efficiency and productivity</span>
              </li>
              <li class="flex items-center space-x-3 animate-fadeIn" style="animation-delay: 150ms">
                <div class="flex justify-center items-center w-8 h-8 bg-blue-500 bg-opacity-10 rounded-full">
                  <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span class="text-gray-700">Real-time monitoring and reporting</span>
              </li>
              <li class="flex items-center space-x-3 animate-fadeIn" style="animation-delay: 200ms">
                <div class="flex justify-center items-center w-8 h-8 bg-blue-500 bg-opacity-10 rounded-full">
                  <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span class="text-gray-700">Streamlined workflow management</span>
              </li>
            </ul>
          </div>

          <!-- Contact Section -->
          <div class="p-6 mt-6 text-white bg-gradient-to-r rounded-xl shadow-lg from-primary to-primary-dark">
            <div class="flex flex-col justify-between items-center space-y-4 md:flex-row md:space-y-0">
              <div>
                <h4 class="mb-1 text-xl font-semibold">Interested in this service?</h4>
                <p class="text-white text-opacity-80">Contact us for more information</p>
              </div>
              <button class="px-6 py-3 bg-white rounded-full shadow-md transition-all transition-colors duration-200 transform text-primary hover:bg-gray-100 hover:shadow-lg hover:scale-105">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes scaleIn {
      from { 
        opacity: 0; 
        transform: scale(0.95);
      }
      to { 
        opacity: 1;
        transform: scale(1);
      }
    }
    
    .animate-fadeIn {
      animation: fadeIn 0.3s ease-out forwards;
    }
    
    .animate-scaleIn {
      animation: scaleIn 0.3s ease-out forwards;
    }
  `]
})
export class ServiceModalComponent {
  @Input() service: any;
  @Input() isOpen = false;
  @Output() modalClosed = new EventEmitter<void>();

  close() {
    this.isOpen = false;
    this.modalClosed.emit();
  }
  
  closeOnBackdrop(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('backdrop-blur-sm')) {
      this.close();
    }
  }

  getFeaturesList(features: string): string[] {
    if (!features) return [];
    return features.split(/\d+\./).filter(feature => feature.trim()).map(feature => feature.trim());
  }
}