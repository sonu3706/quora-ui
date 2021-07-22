import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { share, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private userLoggedInState: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  public isUserLoggedIn(): Observable<boolean> {
    return this.userLoggedInState
      .asObservable()
      .pipe(tap(() => console.log('userLoggedInState executing')));
  }

  public passUserLoggedInState(state: boolean): void {
    this.userLoggedInState.next(state);
  }
}
