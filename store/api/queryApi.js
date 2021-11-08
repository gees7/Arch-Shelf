import Axios from 'axios';
import { callApi } from '../../apiUtils';
import query from '../apiEndPoints/query';

export const addQuery = ({ body }) =>
  callApi({ uriEndPoint: query.addQuery.v1, body });
