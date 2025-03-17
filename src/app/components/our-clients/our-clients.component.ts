import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.scss']
})
export class OurClientsComponent implements OnInit {
  clientLogos: string[] = [];

  constructor() { }

  ngOnInit(): void {
    // Add client logo paths
    this.clientLogos = [
      'assets/Client-logo/1.png',
      'assets/Client-logo/2.png',
      'assets/Client-logo/3.png',
      'assets/Client-logo/4.png',
      'assets/Client-logo/5.png',
      'assets/Client-logo/6.png',
      'assets/Client-logo/7.png',
      'assets/Client-logo/8.png',
      'assets/Client-logo/9.png',
      'assets/Client-logo/10.png',
      'assets/Client-logo/11.png',
      'assets/Client-logo/12.png',
      'assets/Client-logo/13.png',
      'assets/Client-logo/14.png',
      'assets/Client-logo/15.png',
      'assets/Client-logo/16.png',
    ];
  }

  handleImageError(event: any): void {
    // Try alternative path if the image fails to load
    const img = event.target;
    const originalSrc = img.src;
    
    // Try without 'assets/' prefix
    if (originalSrc.includes('assets/')) {
      img.src = originalSrc.replace('assets/', '');
    } else if (!originalSrc.startsWith('/')) {
      // Try with leading slash
      img.src = '/' + originalSrc;
    } else {
      // Fallback to a placeholder
      img.src = 'assets/placeholder-logo.png';
    }
  }
} 