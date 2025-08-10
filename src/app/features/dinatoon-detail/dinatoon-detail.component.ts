import {Component} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {DinatoonListComponent} from "../dinatoon-list/dinatoon-list.component";
import {StarRatingModule} from "angular-star-rating";
import {SearchService} from "../../services/search.service";

@Component({
    selector: 'app-dinatoon-detail',
    standalone: true,
    imports: [
        NgStyle,
        NgIf,
        DinatoonListComponent,
        StarRatingModule,
        NgClass,
        NgForOf
    ],
    templateUrl: './dinatoon-detail.component.html',
    styleUrl: './dinatoon-detail.component.scss'
})
export class DinatoonDetailComponent {
    progressPercentage = 50;
    dinatoonId: string | null;
    dinatoon: any = null;
    rating = 3;
    stars: number[] = [1, 2, 3, 4, 5];
    dinatoons: any;

    constructor(private searchService: SearchService, private readonly route: ActivatedRoute) {
    }

    rate(star: number): void {
        this.rating = star;
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.dinatoonId = params.get('id');
            console.log(this.dinatoonId)

            this.searchService.searchMangaById(this.dinatoonId ? this.dinatoonId : "").subscribe({
                next: (results) => {
                    console.log(results);
                    this.dinatoon = results.at(0);
                    this.dinatoons = JSON.parse(this.searchService.getResults());
                },
                error: (err) => {
                    console.error('Erreur lors de la recherche :', err);
                }
            });
        });


    }
}