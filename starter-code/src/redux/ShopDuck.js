import axios from "axios";

// Actions
const GET_PRODUCTS_SUCCESS = "ironstore/store/GET_PRODUCTS_SUCCESS";
const GET_PRODUCTS_ERROR = "ironstore/store/GET_PRODUCTS_ERROR";

// Initial state
const initialState = {
  loading: false,
  results: {},
  error: undefined,
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        results: action.payload,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}

// Action Creator
export const getProductsSuccess = (payload) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload,
});

export const getProductsError = (error) => ({
  type: GET_TODOS_ERROR,
  error,
});

// Thunk
export const getProducts = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:4000/products")
      .then((res) => {
        dispatch(getProductsSuccess(res.data));
      })
      .catch((res) => {
        dispatch(getProductsError(res.response.data));
      });
  };
};
