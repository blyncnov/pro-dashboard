import { IS__ORDERING, CANCEL__ORDER, ADD__TO__CART } from "../actions/action";

const InitialState = {
  isOrdering: false,
  amOrdering: {},
  cart: [],
  addressInformation: {
    FullName: "",
    PhoneNumber: "",
    Location: "",
    Address: "",
  },
};

export const cartReducers = (state = InitialState, action) => {
  switch (action.type) {
    case IS__ORDERING:
      return {
        ...state,
        isOrdering: true,
        amOrdering: action.payload,
      };
    case CANCEL__ORDER:
      return {
        ...state,
        isOrdering: false,
      };
    case ADD__TO__CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    case "GET__ADDRESS":
      return {
        ...state,
        addressInformation: action.payload,
      };
    case "REMOVE__ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducers;
