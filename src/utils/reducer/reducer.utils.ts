import { AnyAction } from 'redux';

type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>['type'];
  match(action: AnyAction): action is ReturnType<AC>;
};

// withMatchaber OVERLOAD
export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

// withMatchaber OVERLOAD
export function withMatcher<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

// withMatchaber IMPLEMENTATION
export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    },
  });
}

// the return value will be an ACTION<T> or ACTION_WITH_PAYLOAD<T,P>

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

// createAction OVERLOAD
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;
// createAction OVERLOAD
export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

// createAction IMPLEMENTATION
export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
