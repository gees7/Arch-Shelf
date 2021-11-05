import Axios from 'axios';
import { callApi } from '../../apiUtils';
import blog from "../apiEndPoints/blog";

export const getDashboardFeed = () =>
  callApi({ uriEndPoint: blog.getDashboardFeed.v1 });

export const getFeeds = ({ query }) =>
  callApi({ uriEndPoint: blog.getFeeds.v1, query });

export const getCategoriesList = ({ query }) =>
  callApi({ uriEndPoint: blog.getOptions.v1, query });