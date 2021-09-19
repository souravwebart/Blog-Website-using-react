const {
    BLOG_DETAILS_REQUEST,
    BLOG_DETAILS_FAIL,
    BLOG_DETAILS_SUCCESS,
  } = require('../app/constants/blogConstants');
  

  export const blogReducer = (
    state = { blog: {}, loading: true },
    action
  ) => {
    switch (action.type) {
      case BLOG_DETAILS_REQUEST:
        return { loading: true };
      case BLOG_DETAILS_SUCCESS:
        return { loading: false, blog: action.payload };
      case BLOG_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };