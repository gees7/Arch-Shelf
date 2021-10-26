/*
 * File: actionUtils.js
 * Project: caratflare-store
 * File Created: Saturday, 25th July 2020 3:13:57 pm
 * Author: Manjot Singh (manjot.kalsi@simbaquartz.com)
 * -----
 * Last Modified: Saturday, 25th July 2020 7:38:21 pm
 * Modified By: Manjot Singh (manjot.kalsi@simbaquartz.com>)
 * -----
 * Copyright - 2020 SimbaQuartz, SimbaQuartz
 */

/**
 * Generates Action String
 * @param {String} action
 * @param {String} suffix
 */
const actionGenetator = (action, suffix) => `${action}_${suffix}`;

/**
 * Generates Request Action String
 * @param {String} action
 */
export const requestAction = (action) => actionGenetator(action, 'REQUEST');

/**
 * Generates Success Action String
 * @param {String} action
 */
export const successAction = (action) => actionGenetator(action, 'SUCCESS');

/**
 * Generates Error Action String
 * @param {String} action
 */
export const errorAction = (action) => actionGenetator(action, 'ERROR');
