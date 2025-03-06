import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-funfacts',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './funfacts.component.html'
})
export class FunfactsComponent {
    stats = [
        {
            percentage: '100',
            title: 'Audit completion',
            icon: 'flaticon-check',
            gradient: 'from-blue-600 to-blue-500'
        },
        {
            percentage: '70',
            title: 'Cost saving by eliminating non-productive tasks',
            icon: 'flaticon-happy',
            gradient: 'from-purple-600 to-purple-500'
        },
        {
            percentage: '100',
            title: 'NC sustainability',
            icon: 'flaticon-technical-support',
            gradient: 'from-teal-600 to-teal-500'
        },
        {
            percentage: '99',
            title: 'Improvement in Safety, Quality & Productivity',
            icon: 'flaticon-trophy',
            gradient: 'from-amber-600 to-amber-500'
        }
    ];
}