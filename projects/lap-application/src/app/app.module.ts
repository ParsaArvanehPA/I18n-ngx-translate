import {Inject, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomePageViewComponent} from './views/home-page-view/home-page-view.component';
import {
    MissingTranslationHandler,
    TranslateLoader,
    TranslateModule,
    TranslateService,
    TranslationChangeEvent,
} from '@ngx-translate/core';
import {MissingTranslatorValueHandler} from '../../../base-application/src/app/shared/utils/missing-translator-value-handler';
import {HttpClient} from '@angular/common/http';
import {HomePageViewModule} from './views/home-page-view/home-page-view.module';
import {IapHttpLoaderFactory} from './shared/utils/iap-http-loader.factory';
import {LanguageTypes} from '../../../base-application/src/app/shared/models/language-types';
import {HttpLoaderFactory} from '../../../base-application/src/app/shared/utils/http-loader.factory';

const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: '',
                component: HomePageViewComponent,
            },
            {
                path: 'file-viewer',
                loadChildren: () =>
                    import('./views/file-viewer-view/file-viewer-view.module').then((m) => m.FileViewerViewModule),
            },
        ],
    },
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(routes),
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: IapHttpLoaderFactory,
                deps: [HttpClient],
            },
            missingTranslationHandler: {
                provide: MissingTranslationHandler,
                useClass: MissingTranslatorValueHandler,
            },
            extend: true,
        }),
        HomePageViewModule,
    ],
    bootstrap: [AppComponent],
})
export class IapAppModule {
    public constructor(private translateService: TranslateService) {
        translateService.getTranslation(LanguageTypes.Fa);
    }
}
