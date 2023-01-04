import { AnyAction } from 'redux';

// TODO 200 The Problem With Discriminating Unions.mp4

// the return value will be an ACTION<T> or ACTION_WITH_PAYLOAD<T,P>

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

// function OVERLOAD
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;
// function OVERLOAD
export function createAction<T extends string>(type: T, payload: void): Action<T>;

// function IMPLEMENTATION
export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
