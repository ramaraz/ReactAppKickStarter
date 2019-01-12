import { LOAD_ITEMS, CLEAR_ITEMS, LOAD_ITEMS_DONE } from "../actions";

const initialState = {
  items:[]
};

export default function practiceStore(state = initialState, actions) {
  switch (actions.type) {
    case LOAD_ITEMS:
      return initialState;
    case LOAD_ITEMS_DONE:
    state.items.push(actions.payload)
      return {
        ...state,
        title: actions.payload,
        items: state.items
      };
    case CLEAR_ITEMS:
      return [];
    default:
      return state;
  }
}
