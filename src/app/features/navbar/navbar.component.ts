import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        NgIf
    ],
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    menuOpen = false;

    toggleMenu(): void {
        this.menuOpen = !this.menuOpen;
    }

    closeMenu(): void {
        this.menuOpen = false;
    }
}