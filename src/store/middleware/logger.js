export const loggerMiddleware = store => next => action => {
  if (!action.type) {
    return next(action);
  }
  console.log(
    //
    '%c'.padEnd(35, ']'),
    'color: #88f; font-weight:100;'
  );
  console.log(
    //
    '%caction: ',
    'color: #aaa; font-weight:100;',
    action.type
  );
  console.log(
    //
    '%cprev: ',
    'color: #777; font-weight:800;',
    store.getState()
  );
  console.log(
    //
    '%caction: ',
    'color: #0cc; font-weight:800;',
    action
  );

  next(action);

  console.log(
    //
    '%cnext state: ',
    'color: #4c4; font-weight:800;',
    store.getState()
  );
};
