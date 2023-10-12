import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MoodPipe } from './pipes/mood.pipe';

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MoodWidgetComponent } from './components/mood-widget/mood-widget.component';
import { TextBannerComponent } from './components/text-banner/text-banner.component';
import { HeaderComponent } from './shared/header/header.component';
import { MoodTablePagesComponent } from './pages/mood-table-pages/mood-table-pages.component';
import { TableComponent } from './components/table/table.component';
import { AddMoodPageComponent } from './pages/add-mood-page/add-mood-page.component';
import { MoodPostDetailPageComponent } from './pages/mood-post-detail-page/mood-post-detail-page.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MoodWidgetComponent,
    TextBannerComponent,
    HeaderComponent,
    MoodTablePagesComponent,
    TableComponent,
    MoodPipe,
    AddMoodPageComponent,
    MoodPostDetailPageComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
