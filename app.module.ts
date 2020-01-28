import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage'

var firebaseConfig = {
  apiKey: "AIzaSyBcXFQRUEIhyEnkAeO6D6F98Rb2KVfEEIs",
  authDomain: "mon-projet-ionic-27a96.firebaseapp.com",
  databaseURL: "https://mon-projet-ionic-27a96.firebaseio.com",
  projectId: "mon-projet-ionic-27a96",
  storageBucket: "mon-projet-ionic-27a96.appspot.com",
  messagingSenderId: "834362182403",
  appId: "1:834362182403:web:e82871fc6b0a12b828f736",
  measurementId: "G-WMFZQGT07N"
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      AngularFireStorageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
