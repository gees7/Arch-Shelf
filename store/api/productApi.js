import { callApi } from '../../apiUtils';
import { product } from '../apiEndPoints';

export const ProductSearchApi = async (data, isLogin) =>{
 return callApi({
    uriEndPoint: isLogin ? product.searchv3.v1 : product.search.v1,
    query: {
      view_size: 20,
      start_index: data.pageNumber?data.pageNumber:0,
      keyword: '',
    },
    //   query:{
    //     gemstones:data.contactMechId
    //   },
    body: {
      ...data,
    },
  });}

export const getProductDetails = ({ productId, uri }) =>
  callApi({
    uriEndPoint: {
      uri,
      method: 'GET',
      version: '/xapi/v1',
    },
    query: {
      // store_id: 'cflare.product.store',
    },
    pathParams: { productId },
  });

export const getProductImagesApi = ({ productId, type }) =>
  callApi({
    uriEndPoint: {
      uri: '/product/:productId/images',
      method: 'GET',
      version: '/xapi/v1',
    },
    query: {
      store_id: 'cflare.product.store',
      image_type: type,
    },
    pathParams: {
      productId,
    },
  });
export const getProductVideoApi = ({ productId, type }) =>
  callApi({
    uriEndPoint: {
      uri: '/product/:productId/videos',
      method: 'GET',
      version: '/xapi/v1',
    },
    query: {
      store_id: 'cflare.product.store',
      image_type: type,
    },
    pathParams: {
      productId,
    },
  });

export function diamondFeatures(payload) {
  const { shape } = payload;
  return callApi({
    uriEndPoint: product.diamondFeatures.v1,
    body: shape,
  })
    .then((response) => response)
    .catch(() => {});
}

export function meeleDiamondFeatures(payload) {
  return callApi({
    uriEndPoint: product.meeleDiamondFeatures.v1,
  })
    .then((response) => response)
    .catch(() => {});
}
