import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-team',
    imports: [NgIf, NgClass],
    templateUrl: './team.component.html',
    styleUrl: './team.component.scss'
})
export class TeamComponent {

    constructor (
        public router: Router
    ) {}

}