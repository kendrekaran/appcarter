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
            "image": "/images/feature-icon/4.svg",
            "gradient": "from-blue-600 to-blue-500"
        },
        {
            "title": "Scheduling",
            "description": "Auto scheduling of audits.",
            "image": "/images/feature-icon/1.svg",
            "gradient": "from-purple-600 to-purple-500"
        },
        {
            "title": "Notifications",
            "description": "Reminders, escalations through email and mobile notifications.",
            "image": "/images/feature-icon/8.svg",
            "gradient": "from-teal-600 to-teal-500"
        },
        {
            "title": "Checksheet Bank",
            "description": "Create own checksheets or reuse from bank.",
            "image": "/images/feature-icon/5.svg",
            "gradient": "from-amber-600 to-amber-500"
        },
        {
            "title": "Image Upload",
            "description": "Capture before & after photos and upload.",
            "image": "/images/feature-icon/9.svg",
            "gradient": "from-green-600 to-green-500"
        },
        {
            "title": "Sustainability",
            "description": "Monitor sustenance of closed NCs.",
            "image": "/images/feature-icon/6.svg",
            "gradient": "from-red-600 to-red-500"
        },
        {
            "title": "KPI",
            "description": "KPI based decisive dashboard.",
            "image": "/images/feature-icon/7.svg",
            "gradient": "from-indigo-600 to-indigo-500"
        },
        {
            "title": "Selfie Unlock",
            "description": "Unlock audiit by taking photo with auditee.",
            "image": "/images/feature-icon/2.svg",
            "gradient": "from-purple-600 to-purple-500"
        }
    ];
    
}