import { getCategoriesList, getFeeds, getFeed } from '../api/dashboardApi';
import { GET_CATEGORIES, GET_RESOURCES, GET_RESOURCE} from '../types/dashboardTypes';

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

export const getResource = (payload) => async (dispatch) => {
  const res = await getFeed(payload);
  if (res) {
    dispatch({
      type: GET_RESOURCE,
      payload: res,
    });
  }
};
