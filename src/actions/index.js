export const LOAD_ITEMS = "LOAD_ITEMS";
export const CLEAR_ITEMS = "CLEAR_ITEMS";

export const loadItems = () => {
  return {
    type: LOAD_ITEMS
  };
};

export const clearItems = () => {
  return {
    type: CLEAR_ITEMS
  };
};
