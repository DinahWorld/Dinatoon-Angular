import {Component, Input} from '@angular/core';
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
    selector: 'dinatoon-result',
    standalone: true,
    imports: [
        NgStyle,
        NgForOf,
        RouterLink, RouterLinkActive, NgIf
    ],
    templateUrl: './dinatoon-result.component.html',
    styleUrls: [
        './dinatoon-result.component.scss',
    ]
})
export class DinatoonResultComponent {


    @Input()
    dinatoons: {
        id: string,
        imageUrl: string,
    }[] = [];


    ngAfterViewInit() {

    }

    ngOnDestroy() {
    }
}