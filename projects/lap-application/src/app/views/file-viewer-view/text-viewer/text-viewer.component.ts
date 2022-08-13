import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-text-viewer',
    templateUrl: './text-viewer.component.html',
    styleUrls: ['./text-viewer.component.scss'],
})
export class TextViewerComponent {
    public translateInApiSample = this.translateService.instant('TextViewer');

    public constructor(private translateService: TranslateService) {}
}
