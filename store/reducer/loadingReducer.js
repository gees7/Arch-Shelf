/*
 * File: loadingReducer.js
 * Project: caratflare-store
 * File Created: Saturday, 25th July 2020 1:48:18 pm
 * Author: Manjot Singh (manjot.kalsi@simbaquartz.com)
 * -----
 * Last Modified: Saturday, 25th July 2020 7:38:43 pm
 * Modified By: Manjot Singh (manjot.kalsi@simbaquartz.com>)
 * -----
 * Copyright - 2020 SimbaQuartz, SimbaQuartz
 */

export const loadingReducer = (state = {}, action) => {
  const { type } = action;
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

  // not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them
  if (!matches) return state;
  const [, requestName, requestState] = matches;

  return {
    ...state,
    // Store whether a request is happening at the moment or not
    // e.g. will be true when receiving GET_TODOS_REQUEST
    //      and false when receiving GET_TODOS_SUCCESS / GET_TODOS_FAILURE
    [requestName]: requestState === 'REQUEST',
  };
};
