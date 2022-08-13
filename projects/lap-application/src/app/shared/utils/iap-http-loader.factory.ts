import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';

export function IapHttpLoaderFactory(http: HttpClient) {
    return new MultiTranslateHttpLoader(http, [
        {prefix: './assets/base-application/i18n/fa/', suffix: '.json'},
        {prefix: './assets/lap-application/i18n/fa/', suffix: '.json'},
    ]);
}
