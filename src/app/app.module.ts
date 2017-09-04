import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { TopListComponent } from './top-list/top-list.component';
import { TruncatePipe } from './truncate.pipe';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  {
    path: 'genre/:id',
    component: MovieListComponent
  },
  {
    path: 'movies/browse',
    component: MovieListComponent
  },
  {
    path: 'movie/:id',
    component: MovieDetailComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: WelcomePageComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MovieListComponent,
    WelcomePageComponent,
    MovieDetailComponent,
    TopListComponent,
    TruncatePipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
