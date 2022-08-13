import {APP_INITIALIZER, Inject, NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {LanguageTypes} from './shared/models/language-types';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {HomePageViewComponent} from './views/home-page-view/home-page-view.component';
import {MissingTranslatorValueHandler} from './shared/utils/missing-translator-value-handler';
import {MissingTranslationHandler, TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpLoaderFactory} from './shared/utils/http-loader.factory';
import {TranslatorLoaderFactory} from './shared/utils/translator-loader.factory';
import {HomePageViewModule} from './views/home-page-view/home-page-view.module';

const routes: Routes = [
    {
        path: 'base-application',
        children: [
            {
                path: '',
                children: [
                    {
                        path: '',
                        component: HomePageViewComponent,
                    },
                ],
            },
        ],
    },
    {
        path: 'iap-application',
        loadChildren: () => import('../../../lap-application/src/app/app.module').then((m) => m.IapAppModule),
    },
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        RouterModule,
        BrowserModule,
        HttpClientModule,
        HomePageViewModule,
        RouterModule.forRoot(routes),
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
    providers: [
        TranslateService,
        {
            provide: APP_INITIALIZER,
            useFactory: TranslatorLoaderFactory,
            deps: [TranslateService],
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
