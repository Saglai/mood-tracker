import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AddMoodPageComponent } from './pages/add-mood-page/add-mood-page.component';
import { MoodTablePagesComponent } from './pages/mood-table-pages/mood-table-pages.component';
import { MoodPostDetailPageComponent } from './pages/mood-post-detail-page/mood-post-detail-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'add-mood', component: AddMoodPageComponent},
  {path: 'mood-table', component: MoodTablePagesComponent},
  {path: 'mood-table/:id', component: MoodPostDetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
