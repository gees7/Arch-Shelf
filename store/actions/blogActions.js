import { getCategoriesList } from '../api/dashboardApi';
import { GET_CATEGORIES, GET_RESOURCES} from '../types/dashboardTypes';

export const getCategories = (payload) => async (dispatch) => {
  console.log(payload,'payload');
  const res = await getCategoriesList(payload);
  console.log(res,'RES');
  if (res) {
    dispatch({
      type: GET_CATEGORIES,
      payload: res,
    });
  }
};
