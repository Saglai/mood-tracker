import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MoodWidgetComponent } from './components/mood-widget/mood-widget.component';
import { TextBannerComponent } from './components/text-banner/text-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MoodWidgetComponent,
    TextBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
