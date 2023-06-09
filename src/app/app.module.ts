import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // for Swiper.js

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { DragAndDropModule } from 'angular-draggable-droppable';

import { AppComponent } from './app.component';
import { FooterComponent } from './modules/footer/footer-normal/footer-normal.component';
import { HeaderComponent } from './modules/header/header-normal/header-normal.component';
import { Splash1Component } from './pages/splash/splash1/splash1.component';
import { Splash2Component } from './pages/splash/splash2/splash2.component';
import { Scanner1Component } from './pages/scanner/scanner1/scanner1.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { InfoComponent } from './pages/info/info.component';
import { Game1Component } from './pages/game/game1/game1.component';
import { Scanner2Component } from './pages/scanner/scanner2/scanner2.component';
import { HttpClientModule } from '@angular/common/http';
import { GarbageFrontComponent } from './modules/garbage-can/garbage-front/garbage-front.component';
import { GarbageBackComponent } from './modules/garbage-can/garbage-back/garbage-back.component';
import { HeaderGameComponent } from './modules/header/header-game/header-game.component';
import { FooterGameComponent } from './modules/footer/footer-game/footer-game.component';
import { Game2Component } from './pages/game/game2/game2.component';
import { GarbageExtraComponent } from './modules/garbage-can/garbage-extra/garbage-extra.component';
import { ImprintComponent } from './modules/other/imprint/imprint.component';
import { GarbageAllComponent } from './pages/garbage-all/garbage-all.component';

const appRoutes: Routes =[
  { path: "", component: Splash1Component},
  { path: "disclaimer", component: Splash2Component},
  { path: "menu", component: GarbageAllComponent},
  { path: "scanner/scan", component: Scanner1Component},
  { path: "scanner/info", component: Scanner2Component},
  { path: "settings", component: SettingsComponent},
  { path: "info", component: InfoComponent},
  { path: "game/info", component: Game1Component},
  { path: "game/play", component: Game2Component}
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    Splash1Component,
    Splash2Component,
    Scanner1Component,
    SettingsComponent,
    InfoComponent,
    Game1Component,
    Scanner2Component,
    GarbageFrontComponent,
    GarbageBackComponent,
    HeaderGameComponent,
    FooterGameComponent,
    Game2Component,
    GarbageExtraComponent,
    ImprintComponent,
    GarbageAllComponent,
  ],
  imports: [
    IonicModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    ZXingScannerModule,
    DragAndDropModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
