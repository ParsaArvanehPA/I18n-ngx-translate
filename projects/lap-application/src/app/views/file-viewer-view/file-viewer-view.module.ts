import {NgModule} from '@angular/core';
import {PdfViewerComponent} from './pdf-viewer/pdf-viewer.component';
import {TextViewerComponent} from './text-viewer/text-viewer.component';
import {RouterModule, Routes} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

const routes: Routes = [
    {
        path: 'text-viewer',
        component: TextViewerComponent,
    },
    {
        path: 'pdf-viewer',
        component: PdfViewerComponent,
    },
];

@NgModule({
    declarations: [PdfViewerComponent, TextViewerComponent],
    imports: [RouterModule, RouterModule.forChild(routes), TranslateModule],
})
export class FileViewerViewModule {}
