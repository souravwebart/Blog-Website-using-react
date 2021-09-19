import Axios from 'axios';
import {
  BLOG_DETAILS_FAIL,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS,
} from '../constants/blogConstants';

export const detailsBlog = (blogId) => async (dispatch) => {
  dispatch({ type: BLOG_DETAILS_REQUEST, payload: blogId });
  try {
    const { data } = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${blogId}`);
    dispatch({ type: BLOG_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BLOG_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};