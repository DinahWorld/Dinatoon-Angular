import {Component, ElementRef, ViewChild} from '@angular/core';
import {DinatoonListComponent} from "../dinatoon-list/dinatoon-list.component";
import KeenSlider, {KeenSliderInstance} from "keen-slider";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SearchService} from "../../services/search.service";
import {Router} from "@angular/router";
import {UserDinatoonCategoryService} from "../../services/user-dinatoon-category.service";

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
    userCategories: any;

    constructor(private readonly udcService: UserDinatoonCategoryService, private readonly searchService: SearchService, private readonly router: Router) {
    }

    ngOnInit(): void {
        this.udcService.getByUser().subscribe(data => {
            this.userCategories = data;
            console.log(this.userCategories);
        });
    }

    onSearch() {
        if (this.searchQuery.trim().length > 0) {
            this.searchService.searchManga(this.searchQuery).subscribe({
                next: (results) => {
                    this.searchService.setResults(JSON.stringify(results));
                    this.router.navigate(['/search']);
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