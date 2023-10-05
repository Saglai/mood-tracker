import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MoodWidgetComponent } from './components/mood-widget/mood-widget.component';
import { TextBannerComponent } from './components/text-banner/text-banner.component';
import { HeaderComponent } from './shared/header/header.component';
import { MoodTablePagesComponent } from './pages/mood-table-pages/mood-table-pages.component';
import { MoodPostsComponent } from './components/mood-posts/mood-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { MoodPipe } from './pipes/mood.pipe';
import { AddMoodPageComponent } from './pages/add-mood-page/add-mood-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MoodPostDetailPageComponent } from './pages/mood-post-detail-page/mood-post-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MoodWidgetComponent,
    TextBannerComponent,
    HeaderComponent,
    MoodTablePagesComponent,
    MoodPostsComponent,
    MoodPipe,
    AddMoodPageComponent,
    MoodPostDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
