import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MoodWidgetComponent } from './components/mood-widget/mood-widget.component';
import { TextBannerComponent } from './components/text-banner/text-banner.component';
import { HeaderComponent } from './shared/header/header.component';
import { MoodTablePagesComponent } from './pages/mood-table-pages/mood-table-pages.component';
import { MoodListComponent } from './components/mood-list/mood-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MoodPipe } from './pipes/mood.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MoodWidgetComponent,
    TextBannerComponent,
    HeaderComponent,
    MoodTablePagesComponent,
    MoodListComponent,
    MoodPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
