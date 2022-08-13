import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MissingTranslationHandler, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from './shared/utils/http-loader.factory';
import {HttpClient} from '@angular/common/http';
import {MissingTranslatorValueHandler} from './shared/utils/missing-translator-value-handler';
import {LanguageTypes} from './shared/models/language-types';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [HttpClient],
                    },
                    missingTranslationHandler: {
                        provide: MissingTranslationHandler,
                        useClass: MissingTranslatorValueHandler,
                    },
                    defaultLanguage: LanguageTypes.Fa,
                }),
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    // it(`should have as title 'base-application'`, () => {
    //     const fixture = TestBed.createComponent(AppComponent);
    //     const app = fixture.componentInstance;
    //     expect(app.title).toEqual('base-application');
    // });
});
