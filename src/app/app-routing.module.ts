import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenClosePageComponent } from './open-closed-page/open-close-page.component';
import { StatusSliderPageComponent } from './satus-slider-page/satus-slider-page.component';
import { ToggleAnimationsPageComponent } from './toggle-animations-page/toggle-animations-page.component';
import { HeroListPageComponent } from './hero-list-page/hero-list-page.component';
import { HeroListGroupPageComponent } from './hero-list-group-page/hero-list-group-page.component';
import { HeroListEnterLeavePageComponent } from './hero-list-enter-leave-page/hero-list-enter-leave-page.component';
import { HeroListAutoCalcPageComponent } from './hero-list-auto-calc-page/hero-list-auto-calc-page.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/enter-leave' },
  { path: 'open-close', component: OpenClosePageComponent },
  { path: 'status', component: StatusSliderPageComponent },
  { path: 'toggle', component: ToggleAnimationsPageComponent },
  { path: 'heroes', component: HeroListPageComponent, data: { animation: 'FilterPage' } },
  { path: 'hero-groups', component: HeroListGroupPageComponent },
  { path: 'enter-leave', component: HeroListEnterLeavePageComponent },
  { path: 'auto', component: HeroListAutoCalcPageComponent },
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'about', component: AboutComponent, data: { animation: 'AboutPage' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
