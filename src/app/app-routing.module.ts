import { SpotifyComponent } from './feature/spotify/spotify.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoPreloading, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './feature/common/page-not-fount.component';
import { CommonFeatureModule } from './feature/common/common-feature.module';

const appRoutes: Routes = [
    {
        path: 'spotify',
        component: SpotifyComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { preloadingStrategy: NoPreloading }),
        CommonModule,
        CommonFeatureModule
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
