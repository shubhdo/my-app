import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { HttpModule } from '@angular/http';

import { RouterModule,Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { ListService } from './services/dataService';
const appRoutes: Routes = [
  { path : "", component: AddComponent},
  { path : "edit/:id", component: EditComponent},
  { path : "view/:id", component: ViewComponent},
  { path : "list", component: ListComponent}


]
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ViewComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFileUploaderModule,
    NgMultiSelectDropDownModule.forRoot(),

    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
