import { InMemoryDataService } from './in-memory-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { MessagesComponent } from './messages/messages.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UploderComponent } from './uploder/uploder.component';
import { DownloaderComponent } from './downloader/downloader.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AnimationsComponent } from './animations/animations.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AnamComponent } from './anam/anam.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    MessagesComponent,
    DashBoardComponent,
    UploderComponent,
    DownloaderComponent,
    RoutingComponents,
    PageNotFoundComponent,
    AnimationsComponent,
    AnamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation : false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
