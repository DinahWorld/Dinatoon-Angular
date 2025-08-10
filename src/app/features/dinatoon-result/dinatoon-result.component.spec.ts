import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DinatoonResultComponent} from './dinatoon-result.component';

describe('DinatoonListComponent', () => {
    let component: DinatoonResultComponent;
    let fixture: ComponentFixture<DinatoonResultComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DinatoonResultComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(DinatoonResultComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});