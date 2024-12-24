import {Component, ElementRef, ViewChild} from '@angular/core';
import {DinatoonListComponent} from "../dinatoon-list/dinatoon-list.component";
import KeenSlider, {KeenSliderInstance} from "keen-slider";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SearchService} from "../../services/search.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-dinatoon',
    templateUrl: 'home.component.html',
    standalone: true,
    imports: [
        DinatoonListComponent,
        NgStyle,
        NgForOf,
        FormsModule,
        NgIf
    ],
    styleUrls: [
        'home.component.scss',
        "../../../../node_modules/keen-slider/keen-slider.min.css",
    ]
})

export class HomeComponent {
    @ViewChild("sliderRefHome") sliderRef: ElementRef<HTMLElement>;
    searchQuery: string = '';
    results: any[] = [];
    slider: KeenSliderInstance | null = null;
    username: string = "Dinath";
    savedDinatoons = [
        {
            id: 1,
            name: 'Solo Leveling',
            imageUrl: 'https://www.recyclivre.com/media/cache/sylius_shop_product_original/bf/b8/d9e4d5d7aad9fc70646639360f24.jpg'
        },
        {
            id: 2,
            name: 'Tower of God',
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BZWQwZGY3MGItZjQ3OS00MzYxLTlmMWMtNjZiYTY2ZDk4ZjFhXkEyXkFqcGc@._V1_.jpg'
        },
        {
            id: 3,
            name: 'The Beginning After The End',
            imageUrl: 'https://www.manga-news.com/public/images/series/The_Beginning_After_The_End_1_kbooks.webp'
        },
        {
            id: 10,
            name: 'Hardcore Leveling Warrior',
            imageUrl: 'https://i.ebayimg.com/images/g/H4gAAOSwT31jEVCE/s-l1200.jpg'
        },
        {
            id: 4,
            name: 'Omniscient Reader\'s Viewpoint',
            imageUrl: 'https://animotaku.fr/wp-content/uploads/2024/07/anime-omniscient-reader-visuel-1.jpg'
        },
        {id: 5, name: 'God of Bath', imageUrl: 'https://i.mydramalist.com/PnXKwf.jpg'},
        {id: 6, name: 'Viral Hit', imageUrl: 'https://i.ebayimg.com/images/g/~scAAOSwXSVhY5AD/s-l1200.jpg'},
        {
            id: 7,
            name: 'Hive',
            imageUrl: 'https://i.namu.wiki/i/H5OYL4w15QsKH2tB7uwwIwQovHJ4HyJ9hzF-ktu_m_tTd3VBlUe-UYNVewirm53O6qru3gEOIe3Ekw8qwS1M9Q.webp'
        }
    ];
    currentlyReading = [
        {
            id: 1,
            name: 'Solo Leveling',
            imageUrl: 'https://www.recyclivre.com/media/cache/sylius_shop_product_original/bf/b8/d9e4d5d7aad9fc70646639360f24.jpg'
        },
        {id: 6, name: 'Viral Hit', imageUrl: 'https://i.ebayimg.com/images/g/~scAAOSwXSVhY5AD/s-l1200.jpg'},
        {
            id: 7,
            name: 'Hive',
            imageUrl: 'https://i.namu.wiki/i/H5OYL4w15QsKH2tB7uwwIwQovHJ4HyJ9hzF-ktu_m_tTd3VBlUe-UYNVewirm53O6qru3gEOIe3Ekw8qwS1M9Q.webp'
        }
    ];
    completedDinatoons = [
        {id: 8, name: 'Lookism', imageUrl: 'https://i.ebayimg.com/images/g/f9kAAOSwxIhjCXyc/s-l1200.jpg'},
        {id: 5, name: 'God of Bath', imageUrl: 'https://i.mydramalist.com/PnXKwf.jpg'}
    ];
    lovedDinatoons = [
        {
            id: 1,
            name: 'Solo Leveling',
            imageUrl: 'https://www.recyclivre.com/media/cache/sylius_shop_product_original/bf/b8/d9e4d5d7aad9fc70646639360f24.jpg'
        },
        {
            id: 9,
            name: 'Omniscient Reader\'s Viewpoint',
            imageUrl: 'https://animotaku.fr/wp-content/uploads/2024/07/anime-omniscient-reader-visuel-1.jpg'
        },
        {
            id: 10,
            name: 'Hardcore Leveling Warrior',
            imageUrl: 'https://i.ebayimg.com/images/g/H4gAAOSwT31jEVCE/s-l1200.jpg'
        },
        {id: 11, name: 'Lookism', imageUrl: 'https://i.ebayimg.com/images/g/f9kAAOSwxIhjCXyc/s-l1200.jpg'},
    ];

    constructor(private searchService: SearchService, private router: Router) {
    }

    onSearch() {
        if (this.searchQuery.trim().length > 0) {
            this.searchService.searchManga(this.searchQuery).subscribe({
                next: (results) => {
                    this.router.navigate(['/search'], {
                        queryParams: {results: JSON.stringify(results)}
                    });
                },
                error: (err) => {
                    console.error('Erreur lors de la recherche :', err);
                }
            });
        }
    }

    ngAfterViewInit() {
        if (typeof window !== 'undefined' && this.sliderRef?.nativeElement) {
            this.slider = new KeenSlider(
                this.sliderRef.nativeElement,
                {
                    loop: true,
                },
                [
                    (slider) => {
                        let timeout: string | number | NodeJS.Timeout | undefined;
                        let mouseOver = false

                        function clearNextTimeout() {
                            clearTimeout(timeout)
                        }

                        function nextTimeout() {
                            clearTimeout(timeout)
                            if (mouseOver) return
                            timeout = setTimeout(() => {
                                slider.next()
                            }, 10000)
                        }

                        slider.on("created", () => {
                            slider.container.addEventListener("mouseover", () => {
                                mouseOver = true
                                clearNextTimeout()
                            })
                            slider.container.addEventListener("mouseout", () => {
                                mouseOver = false
                                nextTimeout()
                            })
                            nextTimeout()
                        })
                        slider.on("dragStarted", clearNextTimeout)
                        slider.on("animationEnded", nextTimeout)
                        slider.on("updated", nextTimeout)
                    },
                ]
            )

        }
    }

    ngOnDestroy() {
        if (this.slider) this.slider.destroy();
    }

}