import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import {RouterModule} from "@angular/router";
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { StakingGuideComponent } from './staking-guide/staking-guide.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavMenuComponent,
    StakingGuideComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path: "", component: IndexComponent},
      {path: 'staking', component: StakingGuideComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
