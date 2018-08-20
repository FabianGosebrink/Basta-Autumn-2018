import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromActions from './actions';
import * as fromReducers from './reducers';
import * as fromSelectors from './selectors';

@Injectable({ providedIn: 'root' })
export class CoreStoreFacade {
  isSignalRConnectionEstablished$ = this.store.pipe(
    select(fromSelectors.getSignalRConnectionEstablished)
  );

  constructor(private store: Store<fromReducers.CoreState>) {}

  establishSignalRConnection() {
    this.store.dispatch(new fromActions.SignalREstablishConnectionAction());
  }
}
