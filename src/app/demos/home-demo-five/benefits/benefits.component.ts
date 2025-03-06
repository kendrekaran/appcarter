import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-benefits',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './benefits.component.html'
})
export class BenefitsComponent {
    benefits = [
        {
            title: 'Software Products',
            description: 'Comprehensive audit management solutions designed for enterprise needs',
            features: [
                'Ready to use templates',
                'Quick implementation',
                'Regular updates',
                'Mobile responsive',
                'Cloud-based solution'
            ],
            icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
            gradient: 'from-blue-600 to-cyan-500'
        },
        {
            title: 'Custom Projects',
            description: 'Tailored solutions to meet your specific business requirements',
            features: [
                'Customized workflows',
                'Integration capabilities',
                'Scalable architecture',
                'Dedicated support',
                'Regular maintenance'
            ],
            icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
            gradient: 'from-purple-600 to-pink-500'
        },
        {
            title: 'OpEx Services',
            description: 'Operational excellence services to optimize your business processes',
            features: [
                'Process optimization',
                'Performance tracking',
                'Real-time monitoring',
                'Analytics dashboard',
                'Continuous improvement'
            ],
            icon: 'M13 10V3L4 14h7v7l9-11h-7z',
            gradient: 'from-green-600 to-teal-500'
        }
    ];
}
