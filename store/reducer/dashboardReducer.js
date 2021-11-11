import {
  GET_CATEGORIES,
  GET_RESOURCES,
  GET_RESOURCE,
  GET_PROJECTS,
  GET_PROJECT,
  GET_COURSE,
  GET_COURSES,
} from '../types/dashboardTypes';

const initialState = {
  categories: null,
  resources: null,
  resource: null,
  projects: null,
  project: null,
  loading: false,
  error: null,
  courses: null,
  course: null,
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
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case GET_PROJECT:
      return {
        ...state,
        project: action.payload,
      };
    case GET_COURSE:
      return {
        ...state,
        course: action.payload,
      };
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    default:
      return state;
  }
};
