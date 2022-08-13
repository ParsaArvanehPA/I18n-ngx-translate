import {LanguageTypes} from '../models/language-types';
import {TranslateService} from '@ngx-translate/core';

export function TranslatorLoaderFactory(translate: TranslateService) {
    return () => translate.use(LanguageTypes.Fa).toPromise();
}
