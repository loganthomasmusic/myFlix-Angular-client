import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

/**
 * Defines the routes for the application.
 */
const routes: Routes = [
    { path: 'welcome', component: WelcomePageComponent },
    { path: 'movies', component: MovieCardComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
export { routes };