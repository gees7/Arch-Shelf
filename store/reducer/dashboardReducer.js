import { GET_CATEGORIES, GET_RESOURCES, GET_RESOURCE} from '../types/dashboardTypes';

const initialState = {
  categories: null,
  resources: null,
  resource:null,
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
    case GET_RESOURCES:
      return {
        ...state,
        resources: action.payload,
      };
    case GET_RESOURCE:
      return {
        ...state,
        resource: action.payload,
      };
    default:
      return state;
  }
};
