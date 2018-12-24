import { LOAD_ITEMS, CLEAR_ITEMS, LOAD_ITEMS_DONE } from "../actions";

const initialState = {
  items: [1, 2, 3]
};

export default function practiceStore(state = initialState, actions) {
  switch (actions.type) {
    case LOAD_ITEMS:
      return initialState;
    case LOAD_ITEMS_DONE:
      return {
        ...state,
        title: actions.payload
      };
    case CLEAR_ITEMS:
      return [];
    default:
      return state;
  }
}
