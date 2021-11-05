import Axios from 'axios';
import { callApi } from '../../apiUtils';
import competition from '../apiEndPoints/competition';

export const getCompetitions = ({ query }) =>
  callApi({ uriEndPoint: competition.getCompetitions.v1, query });
