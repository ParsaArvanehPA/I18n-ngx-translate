import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HomePageViewComponent} from './home-page-view.component';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {By} from '@angular/platform-browser';

describe('HomePageViewComponent', () => {
    let component: HomePageViewComponent;
    let fixture: ComponentFixture<HomePageViewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HomePageViewComponent],
            imports: [TranslateModule.forRoot()],
            providers: [],
        }).compileComponents();

        fixture = TestBed.createComponent(HomePageViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        const element = fixture.debugElement.query(By.css('.test'));

        expect(element.nativeElement.innerText).toEqual('Hello');
    });
});
