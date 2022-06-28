import { Action } from '@ngrx/store';

export const START_LOADING = '[UI] Start Loading'; // [Reducer Name] Action
export const STOP_LOADING = '[UI] Stop Loading'; // [Reducer Name] Action

export class StartLoading implements Action {
  readonly type = START_LOADING;
}

export class StopLoading implements Action {
  readonly type = STOP_LOADING;
}

export type UiActions = StartLoading | StopLoading;