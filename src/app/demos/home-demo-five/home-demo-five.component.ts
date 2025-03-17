import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { FeaturesComponent } from './features/features.component';

import { AboutComponent } from './about/about.component';
import { ServicesComponent } from '../../common/services/services.component';

import { FunfactsComponent } from './funfacts/funfacts.component';

import { BenefitsComponent } from './benefits/benefits.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { OurClientsComponent } from '../../components/our-clients/our-clients.component';

@Component({
    selector: 'app-home-demo-five',
    standalone: true,
    imports: [
        NavbarComponent, 
        BannerComponent, 
        FeaturesComponent, 
        AboutComponent, 
        ServicesComponent, 
        FunfactsComponent,  
        BackToTopComponent, 
        BenefitsComponent,
        ContactUsComponent,
        FeedbackComponent,
        OurClientsComponent
    ],
    templateUrl: './home-demo-five.component.html',
    styleUrl: './home-demo-five.component.scss'
})
export class HomeDemoFiveComponent {}