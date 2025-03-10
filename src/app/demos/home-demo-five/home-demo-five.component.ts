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

@Component({
    selector: 'app-home-demo-five',
    imports: [
        NavbarComponent, 
        BannerComponent, 
        FeaturesComponent, 
        AboutComponent, 
        ServicesComponent, 
        FunfactsComponent, 
        FooterComponent, 
        BackToTopComponent, 
        BenefitsComponent,
        ContactUsComponent
    ],
    templateUrl: './home-demo-five.component.html',
    styleUrl: './home-demo-five.component.scss'
})
export class HomeDemoFiveComponent {}