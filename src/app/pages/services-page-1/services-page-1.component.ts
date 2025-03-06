import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { FaqComponent } from '../../common/faq/faq.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-services-page-1',
    imports: [RouterLink, NavbarComponent, PageBannerComponent, FaqComponent, FooterComponent, BackToTopComponent],
    templateUrl: './services-page-1.component.html',
    styleUrl: './services-page-1.component.scss'
})
export class ServicesPage1Component {}