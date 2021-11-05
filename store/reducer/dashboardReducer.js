import { GET_CATEGORIES, GET_RESOURCES} from '../types/dashboardTypes';

const initialState = {
  categories:null,
  loading: false,
  error: null,
};
export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
