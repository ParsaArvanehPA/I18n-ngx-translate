import {MissingTranslationHandler, MissingTranslationHandlerParams} from '@ngx-translate/core';

export class MissingTranslatorValueHandler implements MissingTranslationHandler {
    private MISSING_VALUE = 'من چی‌چی ئم؟!';

    public handle(params: MissingTranslationHandlerParams): string {
        return this.MISSING_VALUE;
    }
}
