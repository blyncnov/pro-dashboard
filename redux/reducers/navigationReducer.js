// import { IS__ORDERING, CANCEL__ORDER, ADD__TO__CART } from "../actions/action";

const InitialState = {
  isClicked: false,
  isShowBanner: true,
};

export const cartReducers = (state = InitialState, action) => {
  switch (action.type) {
    case "OPEN__SIDE__NAVIGATION":
      return {
        ...state,
        isClicked: !state.isClicked,
      };
    case "OPEN__GREETING__BANNER":
      return {
        ...state,
        isShowBanner: (state.isShowBanner = false),
      };
    default:
      return state;
  }
};

export default cartReducers;
