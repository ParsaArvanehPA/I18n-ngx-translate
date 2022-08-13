import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TextViewerComponent} from './text-viewer.component';
import {By} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

fdescribe('TextViewerComponent', () => {
    let component: TextViewerComponent;
    let fixture: ComponentFixture<TextViewerComponent>;

    let translateService: TranslateService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TextViewerComponent],
            providers: [{provide: translateService, useValue: translateService}],
        }).compileComponents();

        fixture = TestBed.createComponent(TextViewerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have correct innerText', () => {
        const element = fixture.debugElement.query(By.css('.test'));

        expect(element.nativeElement.innerText).toEqual(translateService.instant('TextViewer'));
    });
});
