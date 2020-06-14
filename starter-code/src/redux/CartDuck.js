// Actions
const ADD_TO_CART = "ironstore/cart/ADD_TO_CART";
const REMOVE_FROM_CART = "ironstore/cart/REMOVE_FROM_CART";

// Initial stat
const initialState = {
  results: {},
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REMOVE_FROM_CART:
      return "";
    case ADD_TO_CART:
      return "";
  }
}

// Action Creator

// Thunk
