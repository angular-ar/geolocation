import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {GeolocationModule} from '@ng-web-apis/geolocation';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routes';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        FormsModule,
        BrowserModule.withServerTransition({appId: 'demo'}),
        AppRoutingModule,
        GeolocationModule,
    ],
    declarations: [AppComponent],
    providers: [
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy,
        },
    ],
})
export class AppBrowserModule {}