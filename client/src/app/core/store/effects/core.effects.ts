import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AbstractNotificationService } from '../../services/abstract-notification.service';
import { SignalRService } from '../../services/signalR.service';
import * as CoreActions from '../actions/core.actions';

@Injectable()
export class CoreEffects {
  @Effect()
  establishSignalRConnection$ = this.actions$
    .ofType(CoreActions.SIGNALR_ESTABLISH_CONNECTION)
    .pipe(
      switchMap((action: CoreActions.SignalREstablishConnectionAction) => {
        return this.signalRService.initializeConnection().pipe(
          tap(() =>
            this.notificationService.showInfo(
              'SignalR',
              'Connection established'
            )
          ),
          map(() => new CoreActions.SignalREstablishedAction()),
          catchError((error: any) => {
            this.notificationService.showError('SignalR', error);
            return of(new CoreActions.SignalRFailedAction(error));
          })
        );
      })
    );

  constructor(
    private notificationService: AbstractNotificationService,
    private signalRService: SignalRService,
    private actions$: Actions
  ) {}
}
