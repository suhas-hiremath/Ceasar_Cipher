import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CeasarCipherComponent } from './ceasar-cipher/ceasar-cipher.component';

export const routes: Routes = [
    {path: '', component:LandingComponent},
    {path: 'caesar-cipher', component:CeasarCipherComponent}
];
