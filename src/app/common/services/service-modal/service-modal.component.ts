import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-service-modal',
  standalone: true,
  imports: [NgIf],
  template: `
    <div *ngIf="isOpen" class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h2>{{service?.title}}</h2>
          <button class="close-btn" (click)="close()">&times;</button>
        </div>
        <div class="modal-body">
          <div class="service-icon">
            <img [src]="service?.icon" [alt]="service?.title">
          </div>
          <p class="description">{{service?.description}}</p>
          <div class="features">
            <h3>Features:</h3>
            <p>{{service?.features}}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    .modal-content {
      background: white;
      padding: 20px;
      border-radius: 8px;
      width: 90%;
      max-width: 600px;
      max-height: 80vh;
      overflow-y: auto;
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    .close-btn {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }
    .service-icon img {
      width: 60px;
      height: auto;
      margin-bottom: 15px;
    }
    .features {
      margin-top: 20px;
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
}