import { Routes } from '@angular/router';
import { HomeDemoFiveComponent } from './demos/home-demo-five/home-demo-five.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ServicesPage2Component } from './pages/services-page-2/services-page-2.component';
import { ProjectsPage2Component } from './pages/projects-page-2/projects-page-2.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { PricingPageComponent } from './pages/pricing-page/pricing-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';

export const routes: Routes = [
    {path: '', component: HomeDemoFiveComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'services-2', component: ServicesPage2Component},
    {path: 'projects-2', component: ProjectsPage2Component},
    {path: 'team', component: TeamPageComponent},
    {path: 'pricing', component: PricingPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: '**', component: ErrorPageComponent}
];