import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import {
  AbstractNotificationService,
  MessageType,
} from '../../services/notification.service';
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
            this.notificationService.showNotification(
              MessageType.Info,
              'SignalR',
              'Connection established'
            )
          ),
          map(() => new CoreActions.SignalREstablishedAction()),
          catchError((error: any) => {
            this.notificationService.showNotification(
              MessageType.Error,
              'SignalR',
              error
            );
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
