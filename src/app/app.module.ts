import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusSliderComponent } from './status-slider/status-slider.component';
import { OpenCloseComponent } from './open-closed/open-closed.component';
import { OpenClosePageComponent } from './open-closed-page/open-close-page.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeroListAutoComponent } from './hero-list-auto-calc-page/hero-list-auto.component';
import { HeroListAutoCalcPageComponent } from './hero-list-auto-calc-page/hero-list-auto-calc-page.component';
import { HeroListEnterLeaveComponent } from './hero-list-enter-leave-page/hero-list-enter-leave.component';
import { HeroListEnterLeavePageComponent } from './hero-list-enter-leave-page/hero-list-enter-leave-page.component';
import { HeroListGroupPageComponent } from './hero-list-group-page/hero-list-group-page.component';
import { HeroListGroupsComponent } from './hero-list-group-page/hero-list-groups.component';
import { HeroListPageComponent } from './hero-list-page/hero-list-page.component';
import { ToggleAnimationsPageComponent } from './toggle-animations-page/toggle-animations-page.component';
import { StatusSliderPageComponent } from './satus-slider-page/satus-slider-page.component';
import { InsertRemoveComponent } from './insert-remove/insert-remove.component';
import { OpenCloseChildComponent } from './open-close-child/open-close-child.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusSliderComponent,
    OpenCloseComponent,
    OpenCloseChildComponent,
    OpenClosePageComponent,
    StatusSliderPageComponent,
    ToggleAnimationsPageComponent,
    HeroListPageComponent,
    HeroListGroupsComponent,
    HeroListGroupPageComponent,
    HeroListEnterLeavePageComponent,
    HeroListEnterLeaveComponent,
    HeroListAutoCalcPageComponent,
    HeroListAutoComponent,
    HomeComponent,
    InsertRemoveComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
