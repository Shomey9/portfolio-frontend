import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentDisplayComponent } from './modules/content-display/content-display.component';

const routes: Routes = [
  {
    path:"",
    component: ContentDisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
