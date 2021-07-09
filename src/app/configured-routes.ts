import { Routes } from '@angular/router';

export class ConfiguredRoutes {
  public static authModule = () =>
    import('./modules/authentication/authentication.module').then(
      (auth) => auth.AuthenticationModule
    );
  public static homeModule = () =>
    import('./modules/home/home.module').then((home) => home.HomeModule);
}
