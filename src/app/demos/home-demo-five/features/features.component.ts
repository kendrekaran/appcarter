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
            "title": "Mobile Audit",
            "description": "Easy to complete audit on mobile, tablet & laptop",
            "icon": "fas fa-mobile-alt",
            "gradient": "from-blue-600 to-blue-500"
        },
        {
            "title": "Scheduling",
            "description": "Auto scheduling of audits.",
            "icon": "fas fa-calendar-alt",
            "gradient": "from-purple-600 to-purple-500"
        },
        {
            "title": "Notifications",
            "description": "Reminders, escalations through email and mobile notifications.",
            "icon": "fas fa-bell",
            "gradient": "from-teal-600 to-teal-500"
        },
        {
            "title": "Checksheet Bank",
            "description": "Create own checksheets or reuse from bank.",
            "icon": "fas fa-list-alt",
            "gradient": "from-amber-600 to-amber-500"
        },
        {
            "title": "Image Upload",
            "description": "Capture before & after photos and upload.",
            "icon": "fas fa-camera",
            "gradient": "from-green-600 to-green-500"
        },
        {
            "title": "Sustainability",
            "description": "Monitor sustenance of closed NCs.",
            "icon": "fas fa-recycle",
            "gradient": "from-red-600 to-red-500"
        },
        {
            "title": "KPI",
            "description": "KPI based decisive dashboard.",
            "icon": "fas fa-chart-line",
            "gradient": "from-indigo-600 to-indigo-500"
        },
        {
            "title": "Selfie Unlock",
            "description": "Unlock audiit by taking photo with auditee.",
            "icon": "fas fa-chart-line",
            "gradient": "from-purple-600 to-purple-500"
        }
    ];
    
}