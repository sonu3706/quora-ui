import { Routes } from '@angular/router';
import { ConfiguredRoutes } from './configured-routes';
import {MainComponent} from "./modules/shared/components/main/main.component";

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: ConfiguredRoutes.homeModule,
  },
  {
    path: 'auth',
    loadChildren: ConfiguredRoutes.authModule,
  },
  { path: '', pathMatch: 'full', redirectTo: 'main'},
  { path: 'main', component: MainComponent }
];
