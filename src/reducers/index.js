import { LOAD_ITEMS, CLEAR_ITEMS } from "../actions";

const initialState = {
  items: [1, 2, 3]
};

export default function practiceStore(state = initialState, actions) {
  switch (actions.type) {
    case LOAD_ITEMS:
      return initialState;
    case CLEAR_ITEMS:
      return [];
    default:
      return state;
  }
}
