import {Component} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {DinatoonListComponent} from "../dinatoon-list/dinatoon-list.component";
import {StarRatingModule} from "angular-star-rating";

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
    dinatoon: {
        name: string,
        imageUrl: string,
        genre: string,
        actualChapter: string,
        chapterTotal: string
    } | undefined;
    rating = 3;
    stars: number[] = [1, 2, 3, 4, 5];
    dinatoons = [
        {
            id: "1",
            name: 'Solo Leveling',
            imageUrl: 'https://www.recyclivre.com/media/cache/sylius_shop_product_original/bf/b8/d9e4d5d7aad9fc70646639360f24.jpg',
            genre: "Dark Fantasy",
            actualChapter: "S1 : E3",
            chapterTotal: "S1 : E3",
        },
        {
            id: "2",
            name: 'Tower of God',
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BZWQwZGY3MGItZjQ3OS00MzYxLTlmMWMtNjZiYTY2ZDk4ZjFhXkEyXkFqcGc@._V1_.jpg',
            genre: "Dark Fantasy", actualChapter: "S1 : E3",
            chapterTotal: "S1 : E3",
        },
        {
            id: "3",
            name: 'The Beginning After The End',
            imageUrl: 'https://www.manga-news.com/public/images/series/The_Beginning_After_The_End_1_kbooks.webp',
            genre: "Dark Fantasy", actualChapter: "S1 : E3",
            chapterTotal: "S1 : E3",
        },
        {
            id: "10",
            name: 'Hardcore Leveling Warrior',
            imageUrl: 'https://i.ebayimg.com/images/g/H4gAAOSwT31jEVCE/s-l1200.jpg',
            genre: "Dark Fantasy", actualChapter: "S1 : E3",
            chapterTotal: "S1 : E3",
        },
        {
            id: "4",
            name: 'Omniscient Reader\'s Viewpoint',
            imageUrl: 'https://animotaku.fr/wp-content/uploads/2024/07/anime-omniscient-reader-visuel-1.jpg',
            genre: "Dark Fantasy", actualChapter: "S1 : E3",
            chapterTotal: "S1 : E3",
        },
        {
            id: "5",
            name: 'God of Bath',
            imageUrl: 'https://i.mydramalist.com/PnXKwf.jpg',
            genre: "Dark Fantasy", actualChapter: "S1 : E3",
            chapterTotal: "S1 : E3",
        },
        {
            id: "6",
            name: 'Viral Hit',
            imageUrl: 'https://i.ebayimg.com/images/g/~scAAOSwXSVhY5AD/s-l1200.jpg',
            genre: "Dark Fantasy", actualChapter: "S1 : E3",
            chapterTotal: "S1 : E3",
        },
        {
            id: "7",
            name: 'Hive',
            imageUrl: 'https://i.namu.wiki/i/H5OYL4w15QsKH2tB7uwwIwQovHJ4HyJ9hzF-ktu_m_tTd3VBlUe-UYNVewirm53O6qru3gEOIe3Ekw8qwS1M9Q.webp',
            genre: "Dark Fantasy", actualChapter: "S1 : E3",
            chapterTotal: "S1 : E3",
        },
        {
            id: "8",
            name: 'Lookism',
            imageUrl: 'https://i.ebayimg.com/images/g/f9kAAOSwxIhjCXyc/s-l1200.jpg',
            genre: "Dark Fantasy", actualChapter: "S1 : E3",
            chapterTotal: "S1 : E3",
        },
        {
            id: "9",
            name: 'Omniscient Reader\'s Viewpoint',
            imageUrl: 'https://animotaku.fr/wp-content/uploads/2024/07/anime-omniscient-reader-visuel-1.jpg',
            genre: "Dark Fantasy", actualChapter: "S1 : E3",
            chapterTotal: "S1 : E3",
        },
        {
            id: "10",
            name: 'Hardcore Leveling Warrior',
            imageUrl: 'https://i.ebayimg.com/images/g/H4gAAOSwT31jEVCE/s-l1200.jpg',
            genre: "Dark Fantasy", actualChapter: "S1 : E3",
            chapterTotal: "S1 : E3",
        },
        {
            id: "11",
            name: 'Lookism',
            imageUrl: 'https://i.ebayimg.com/images/g/f9kAAOSwxIhjCXyc/s-l1200.jpg',
            genre: "Dark Fantasy", actualChapter: "S1 : E3",
            chapterTotal: "S1 : E3",
        }
    ];

    constructor(private readonly route: ActivatedRoute) {
    }

    rate(star: number): void {
        this.rating = star;
    }

    ngOnInit(): void {
        this.dinatoonId = this.route.snapshot.paramMap.get('id');
        console.log(this.route.snapshot.paramMap.get('id'));
        this.dinatoon = this.dinatoons.find(w => w.id === this.dinatoonId);
    }
}