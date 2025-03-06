import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-features',
    standalone: true,
    imports: [RouterLink, CommonModule],
    templateUrl: './features.component.html'
})
export class FeaturesComponent {
    features = [
        {
            title: 'Mobile Audit',
            description: 'Easy to complete audit on mobile, tablet & laptop',
            icon: 'flaticon-blog',
            gradient: 'from-blue-600 to-blue-500'
        },
        {
            title: 'Scheduling',
            description: ' Auto scheduling of audits.',
            icon: 'flaticon-blueprint',
            gradient: 'from-purple-600 to-purple-500'
        },
        {
            title: 'Notifiications',
            description: 'Reminders, escalations through email and mobile notifications.',
            icon: 'flaticon-clock',
            gradient: 'from-teal-600 to-teal-500'
        },
        {
            title: 'Checksheet Bank',
            description: 'Create own checksheets or reuse from bank.',
            icon: 'flaticon-software',
            gradient: 'from-amber-600 to-amber-500'
        },
        {
            title: 'Image Upload',
            description: 'Capture before & after photos and upload.',
            icon: 'flaticon-blueprint',
            gradient: 'from-green-600 to-green-500'
        },
        {
            title: 'Sustainability',
            description: 'Monitor sustenance of closed NCs.',
            icon: 'flaticon-clock',
            gradient: 'from-red-600 to-red-500'
        },
        {
            title: 'KPI',
            description: 'KPI based decisive dashboard.',
            icon: 'flaticon-software',
            gradient: 'from-indigo-600 to-indigo-500'
        },
    ];
}