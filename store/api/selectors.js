/*
 * File: selectors.js
 * Project: caratflare-store
 * File Created: Saturday, 25th July 2020 2:35:47 pm
 * Author: Manjot Singh (manjot.kalsi@simbaquartz.com)
 * -----
 * Last Modified: Saturday, 25th July 2020 7:38:34 pm
 * Modified By: Manjot Singh (manjot.kalsi@simbaquartz.com>)
 * -----
 * Copyright - 2020 SimbaQuartz, SimbaQuartz
 */

import _ from 'lodash';

// returns true only when all actions is not loading
export const createLoadingSelector = (actions) => (state) => _(actions)
  .some((action) => _.get(state, `loading.${action}`));
