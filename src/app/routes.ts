import { Routes } from "@angular/router";
import { ConfiguredRoutes } from "./configured-routes";

export const routes: Routes = [
    {
      path: 'home',
      loadChildren: ConfiguredRoutes.homeModule,
    },
    {
      path: 'auth',
      loadChildren: ConfiguredRoutes.authModule,
    },
  ];