import { getCategoriesList } from '../api/dashboardApi';
import { GET_CATEGORIES, GET_RESOURCES} from '../types/dashboardTypes';

export const getCategories = (payload) => async (dispatch) => {
  const res = await getCategoriesList(payload);
  if (res) {
    dispatch({
      type: GET_CATEGORIES,
      payload: res,
    });
  }
};
