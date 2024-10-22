import { FETCH_LISTS, ADD_LIST, ADD_PRODUCT, TOGGLE_PURCHASED } from '../actionTypes';

const initialState = {
  lists: [],
};

const shoppingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LISTS:
      return { ...state, lists: action.payload };
    case ADD_LIST:
      return { ...state, lists: [...state.lists, action.payload] };
    case ADD_PRODUCT:
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === action.payload.listId
            ? { ...list, products: [...list.products, action.payload.product] }
            : list
        ),
      };
    case TOGGLE_PURCHASED:
      return {
        ...state,
        lists: state.lists.map((list) => ({
          ...list,
          products: list.products.map((product) =>
            product.id === action.payload.id ? action.payload : product
          ),
        })),
      };
    default:
      return state;
  }
};

export default shoppingListReducer;
