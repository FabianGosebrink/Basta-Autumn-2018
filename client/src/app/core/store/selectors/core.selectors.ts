import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromCore from '../reducers/core.reducer';

export const getCompleteCoreState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.core
);

export const getSignalRConnectionEstablished = createSelector(
  getCompleteCoreState,
  fromCore.getSignalRConnectionEstablished
);
