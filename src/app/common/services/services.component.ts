import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ServiceModalComponent } from './service-modal/service-modal.component';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule, RouterLink, ServiceModalComponent],
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
    selectedService: any = null;
    isModalOpen = false;

    showServiceDetails(service: any) {
        this.selectedService = service;
        this.isModalOpen = true;
    }

    handleModalClose() {
        this.isModalOpen = false;
        this.selectedService = null;
    }

    services = [
        {
            icon: 'images/modules/EHS.png',
            title: 'Safety',
            description: 'Immediate reporting of health and safety concerns.',
            features: "1. Monitoring through UNIQUE consolidated dashboard highlighting business critical and strategical parameters 2. Spot on reporting of observations 3. Check Sheet Bank with ready to use audit templates 4. QR Code Scanning to start, monitor and get the details of activities 5. Perform actions with convenient channels like Laptop, Desktop, Mobile, Tablet 6. Manage Workflow as per organization’s process 7. Auto Scheduling of gemba walks as per routes and themes defined 8. Notifications & Alerts about risk, delayed actions, new actions, escalations etc"
        },
        {
            icon: 'images/modules/Quality.png',
            title: 'Quality',
            description: 'Achieve quality that makes your customer smile',
            features: "1. Monitoring through UNIQUE consolidated dashboard highlighting business critical and strategical parameters 2. Spot on reporting of observations 3. Check Sheet Bank with ready to use audit templates 4. QR Code Scanning to start, monitor and get the details of activities 5. Perform actions with convenient channels like Laptop, Desktop, Mobile, Tablet 6. Manage Workflow as per organization’s process 7. Auto Scheduling of gemba walks as per routes and themes defined 8. Notifications & Alerts about risk, delayed actions, new actions, escalations etc"
        },
        {
            icon: 'images/modules/process.png',
            title: 'Process',
            description: 'Make your processes 100 % compliant',
            features: "1. Monitoring through UNIQUE consolidated dashboard highlighting business critical and strategical parameters 2. Spot on reporting of observations 3. Check Sheet Bank with ready to use audit templates 4. QR Code Scanning to start, monitor and get the details of activities 5. Perform actions with convenient channels like Laptop, Desktop, Mobile, Tablet 6. Manage Workflow as per organization’s process 7. Auto Scheduling of gemba walks as per routes and themes defined 8. Notifications & Alerts about risk, delayed actions, new actions, escalations etc"
        },
        {
            icon: 'images/modules/5S.png',
            title: '5S',
            description: 'Make principle adherence on click.',
            features: "1. Monitoring through UNIQUE consolidated dashboard highlighting business critical and strategical parameters 2. Spot on reporting of observations 3. Check Sheet Bank with ready to use audit templates 4. QR Code Scanning to start, monitor and get the details of activities 5. Perform actions with convenient channels like Laptop, Desktop, Mobile, Tablet 6. Manage Workflow as per organization’s process 7. Auto Scheduling of gemba walks as per routes and themes defined 8. Notifications & Alerts about risk, delayed actions, new actions, escalations etc"
        },
        {
            icon: 'images/modules/Gemba.png',
            title: 'Gemba Walk',
            description: 'Capture your observations while you walk.',
            features: "1. Monitoring through UNIQUE consolidated dashboard highlighting business critical and strategical parameters 2. Spot on reporting of observations 3. Check Sheet Bank with ready to use audit templates 4. QR Code Scanning to start, monitor and get the details of activities 5. Perform actions with convenient channels like Laptop, Desktop, Mobile, Tablet 6. Manage Workflow as per organization’s process 7. Auto Scheduling of gemba walks as per routes and themes defined 8. Notifications & Alerts about risk, delayed actions, new actions, escalations etc"
        },
        {
            icon: 'images/modules/Layer.png',
            title: 'LPA',
            description: 'Confirm process adherence through different level audits',
            features: "1. Monitoring through UNIQUE consolidated dashboard highlighting business critical and strategical parameters 2. Spot on reporting of observations 3. Check Sheet Bank with ready to use audit templates 4. QR Code Scanning to start, monitor and get the details of activities 5. Perform actions with convenient channels like Laptop, Desktop, Mobile, Tablet 6. Manage Workflow as per organization’s process 7. Auto Scheduling of gemba walks as per routes and themes defined 8. Notifications & Alerts about risk, delayed actions, new actions, escalations etc"
        },
        {
            icon: 'images/modules/supplier.png',
            title: 'Supplier',
            description: 'Ensure supplier quality that you expect',
            features: "1. Monitoring through UNIQUE consolidated dashboard highlighting business critical and strategical parameters 2. Spot on reporting of observations 3. Check Sheet Bank with ready to use audit templates 4. QR Code Scanning to start, monitor and get the details of activities 5. Perform actions with convenient channels like Laptop, Desktop, Mobile, Tablet 6. Manage Workflow as per organization’s process 7. Auto Scheduling of gemba walks as per routes and themes defined 8. Notifications & Alerts about risk, delayed actions, new actions, escalations etc"
        },
        {
            icon: 'images/modules/supplier.png',
            title: 'Customer',
            description: 'Take complete control of customer observations',
            features: "1. Monitoring through UNIQUE consolidated dashboard highlighting business critical and strategical parameters 2. Spot on reporting of observations 3. Check Sheet Bank with ready to use audit templates 4. QR Code Scanning to start, monitor and get the details of activities 5. Perform actions with convenient channels like Laptop, Desktop, Mobile, Tablet 6. Manage Workflow as per organization’s process 7. Auto Scheduling of gemba walks as per routes and themes defined 8. Notifications & Alerts about risk, delayed actions, new actions, escalations etc"
        },
        {
            icon: 'images/modules/supplier.png',
            title: 'Inspection',
            description: 'No more hectic inspections',
            features: "1. Monitoring through UNIQUE consolidated dashboard highlighting business critical and strategical parameters 2. Spot on reporting of observations 3. Check Sheet Bank with ready to use audit templates 4. QR Code Scanning to start, monitor and get the details of activities 5. Perform actions with convenient channels like Laptop, Desktop, Mobile, Tablet 6. Manage Workflow as per organization’s process 7. Auto Scheduling of gemba walks as per routes and themes defined 8. Notifications & Alerts about risk, delayed actions, new actions, escalations etc"
        }
    ];
}