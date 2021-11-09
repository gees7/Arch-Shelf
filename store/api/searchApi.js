import Axios from 'axios';
import { callApi } from '../../apiUtils';
import search from '../apiEndPoints/search';

export const searchApi = ({ query }) =>
  callApi({ uriEndPoint: search.getSearch.v1, query });