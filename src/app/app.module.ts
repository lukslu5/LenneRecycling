import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './modules/footer/footer.component';
import { HeaderComponent } from './modules/header/header.component';
import { Splash1Component } from './pages/splash/splash1/splash1.component';
import { Splash2Component } from './pages/splash/splash2/splash2.component';
import { Scanner1Component } from './pages/scanner/scanner1/scanner1.component';
import { GarbageBrownComponent } from './pages/garbage/garbage-brown/garbage-brown.component';
import { GarbageGreenComponent } from './pages/garbage/garbage-green/garbage-green.component';
import { GarbageYellowComponent } from './pages/garbage/garbage-yellow/garbage-yellow.component';
import { GarbageGrayComponent } from './pages/garbage/garbage-gray/garbage-gray.component';
import { CurrentPageComponent } from './modules/current-page/current-page.component';
import { SettingsComponent } from './pages/other/settings/settings.component';
import { InfoComponent } from './pages/other/info/info.component';
import { Game1Component } from './pages/game/game1/game1.component';
import { Scanner2Component } from './pages/scanner/scanner2/scanner2.component';


const appRoutes: Routes =[
  { path: "", component: Splash1Component},
  { path: "declaimer", component: Splash2Component},
  { path: "menu/brown", component: GarbageBrownComponent},
  { path: "menu/green", component: GarbageGreenComponent},
  { path: "menu/gray", component: GarbageGrayComponent},
  { path: "menu/yellow", component: GarbageYellowComponent},
  { path: "scanner/scan", component: Scanner1Component},
  { path: "scanner/info", component: Scanner2Component},
  { path: "settings", component: SettingsComponent},
  { path: "info", component: InfoComponent},
  { path: "game", component: Game1Component},
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    Splash1Component,
    Splash2Component,
    Scanner1Component,
    GarbageBrownComponent,
    GarbageGreenComponent,
    GarbageYellowComponent,
    GarbageGrayComponent,
    CurrentPageComponent,
    SettingsComponent,
    InfoComponent,
    Game1Component,
    Scanner2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
