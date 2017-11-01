import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
// Import HttpClientModule from @angular/common/http
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> a29c0dd76990942da99f773d47908678583a6325
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
<<<<<<< HEAD
import { LoginPage } from '../pages/login/login';
=======
>>>>>>> a29c0dd76990942da99f773d47908678583a6325

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
<<<<<<< HEAD
    LoginPage,
=======
>>>>>>> a29c0dd76990942da99f773d47908678583a6325
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
<<<<<<< HEAD
    IonicModule.forRoot(MyApp),
    BrowserModule,
    HttpClientModule
=======
    BrowserModule,
    IonicModule.forRoot(MyApp)
>>>>>>> a29c0dd76990942da99f773d47908678583a6325
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
<<<<<<< HEAD
    TabsPage,
    LoginPage
=======
    TabsPage
>>>>>>> a29c0dd76990942da99f773d47908678583a6325
  ],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
=======
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
>>>>>>> a29c0dd76990942da99f773d47908678583a6325
