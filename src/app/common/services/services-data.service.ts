import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesDataService {
  private _services = [
    {
      icon: 'images/modules/EHS.png',
      title: 'Safety',
      description: 'Immediate reporting of health and safety concerns.',
      features: "1. Instant alert in case of safety violation 2. Provision to set preventive sfaety audits 3. Share the safety concerns real time 4. Centralised safety data to make informed business decisions"
    },
    {
      icon: 'images/modules/Quality.png',
      title: 'Quality',
      description: 'Achieve quality that makes your customer smile',
      features: "1. Achieve quality that makes your customer smile"
    },
    {
      icon: 'images/modules/process.png',
      title: 'Process',
      description: 'Make your processes 100 % compliant',
      features: "1. Monitoring through UNIQUE consolidated dashboard highlighting business critical and strategical parameters 2. Spot on reporting of observations 3. Check Sheet Bank with ready to use audit templates 4. QR Code Scanning to start, monitor and get the details of activities 5. Perform actions with convenient channels like Laptop, Desktop, Mobile, Tablet 6. Manage Workflow as per organization's process 7. Auto Scheduling of gemba walks as per routes and themes defined 8. Notifications & Alerts about risk, delayed actions, new actions, escalations etc"
    },
    {
      icon: 'images/modules/5S.png',
      title: '5S',
      description: 'Make principle adherence on click.',
      features: "1. Make principle adherence on click."
    },
    {
      icon: 'images/modules/Gemba.png',
      title: 'Gemba Walk',
      description: 'Capture your observations while you walk.',
      features: "1. Monitoring through UNIQUE consolidated dashboard highlighting business critical and strategical parameters 2. Spot on reporting of observations 3. Check Sheet Bank with ready to use audit templates 4. QR Code Scanning to start, monitor and get the details of activities 5. Perform actions with convenient channels like Laptop, Desktop, Mobile, Tablet 6. Manage Workflow as per organization's process 7. Auto Scheduling of gemba walks as per routes and themes defined 8. Notifications & Alerts about risk, delayed actions, new actions, escalations etc"
    },
    {
      icon: 'images/modules/Layer.png',
      title: 'LPA',
      description: 'Confirm process adherence through different level audits',
      features: "1.Start audit with selfie with machine/operation 2. AI based auto scheduling of audits 3. Easy customizable workflows as per organization's process 4. Auto scheduling of audit in calendar 5. Notifications and remonders about planned audit 6. Easy NC assignment and closure 7. Aleart about Repeated NCs 8. Customized reports and dashboard 9. Rewards & recognition for auditors"
    },
    {
      icon: 'images/modules/supplier.png',
      title: 'Supplier',
      description: 'Ensure supplier quality that you expect',
      features: "1. Ensure supplier quality that you expect"
    },
    {
      icon: 'images/modules/supplier.png',
      title: 'Customer',
      description: 'Take complete control of customer observations',
      features: "1. Take complete control of customer observations"
    },
    {
      icon: 'images/modules/supplier.png',
      title: 'Inspection',
      description: 'No more hectic inspections',
      features: "1. No more hectic inspections"
    }
  ];

  constructor() { }

  get services() {
    return this._services;
  }

  getServiceById(id: number) {
    if (id >= 0 && id < this._services.length) {
      return this._services[id];
    }
    return null;
  }
} 