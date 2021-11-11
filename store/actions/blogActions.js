import { getCategoriesList, getFeeds, getFeed } from '../api/dashboardApi';
import {
  GET_CATEGORIES,
  GET_RESOURCES,
  GET_RESOURCE,
  GET_PROJECTS,
  GET_PROJECT,
  GET_COURSE,
  GET_COURSES,
} from '../types/dashboardTypes';

export const getCategories = (payload) => async (dispatch) => {
  const res = await getCategoriesList(payload);
  if (res) {
    dispatch({
      type: GET_CATEGORIES,
      payload: res,
    });
  }
};

export const getResources = (payload) => async (dispatch) => {
  const res = await getFeeds(payload);
  if (res) {
    dispatch({
      type: GET_RESOURCES,
      payload: res,
    });
  }
};

export const getProjects = (payload) => async (dispatch) => {
  const res = await getFeeds(payload);
  if (res) {
    dispatch({
      type: GET_PROJECTS,
      payload: res,
    });
  }
};

export const getResource = (payload) => async (dispatch) => {
  const res = await getFeed(payload);
  if (res) {
    dispatch({
      type: GET_RESOURCE,
      payload: res,
    });
  }
};

export const getProject = (payload) => async (dispatch) => {
  const res = await getFeed(payload);
  if (res) {
    dispatch({
      type: GET_PROJECT,
      payload: res,
    });
  }
};

export const getCourse = (payload) => async (dispatch) => {
  const res = await getFeed(payload);
  if (res) {
    dispatch({
      type: GET_COURSE,
      payload: res,
    });
  }
};

export const getCourses = (payload) => async (dispatch) => {
  const res = await getFeeds(payload);
  if (res) {
    dispatch({
      type: GET_COURSES,
      payload: res,
    });
  }
};
