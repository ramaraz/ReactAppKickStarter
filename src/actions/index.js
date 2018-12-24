export const LOAD_ITEMS = "LOAD_ITEMS";
export const LOAD_ITEMS_DONE = "LOAD_ITEMS_DONE";
export const CLEAR_ITEMS = "CLEAR_ITEMS";

export const loadItems = userId => {
  return {
    type: LOAD_ITEMS,
    payload: userId
  };
};

export const loadItemsDone = ({ title }) => {
  return {
    type: LOAD_ITEMS_DONE,
    payload: title
  };
};

export const clearItems = () => {
  return {
    type: CLEAR_ITEMS
  };
};
