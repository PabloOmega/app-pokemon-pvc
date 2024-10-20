import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(), provideFirebaseApp(() => initializeApp({"projectId":"app-pokemon-pvc","appId":"1:825271103424:web:eb15d5f7089038c08b2225","storageBucket":"app-pokemon-pvc.appspot.com","apiKey":"AIzaSyBkBQEyzI8oOlCIGrSr530n-5u_IYPL4GU","authDomain":"app-pokemon-pvc.firebaseapp.com","messagingSenderId":"825271103424"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage()), 
  ]
};
