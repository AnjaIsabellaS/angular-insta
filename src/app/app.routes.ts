import { Routes } from '@angular/router';
import { MainPage } from './shared/components/main-page/main-page';
import { Contact } from './shared/components/contact/contact';

export const routes: Routes = [
  { path: '', component: MainPage },
  { path: 'contact', component: Contact },
];
