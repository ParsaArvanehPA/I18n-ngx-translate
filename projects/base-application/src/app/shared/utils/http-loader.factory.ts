import {HttpClient} from '@angular/common/http';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';

export function HttpLoaderFactory(http: HttpClient) {
    return new MultiTranslateHttpLoader(http, [{prefix: './assets/base-application/i18n/fa/', suffix: '.json'}]);
}
