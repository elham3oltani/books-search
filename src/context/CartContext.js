import React, { createContext, useReducer } from "react";

const initialState = {
  selectedItems: [],
  selectedFavorite: [],
  itemsCounterFav: 0,
  itemsCounter: 0,
  selectedWishlist: [],
  total: 0,
  chekout: false,
};
const sumItems = (items) => {
  const itemsCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = items
    .reduce((total, product) => total + 23.4 * product.quantity, 0)
    .toFixed(2);
  return { itemsCounter, total };
};

const sumFoodsFavorite = (itemsFood) => {
  const itemsCounterFav = itemsFood.reduce(
    (totals, foodFav) => totals + foodFav.quantity,
    0
  );
  return { itemsCounterFav };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEMS":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems),
        chekout: false,
      };

    case "ADD-FAVORITE":
      if (
        !state.selectedFavorite.find((items) => items.id === action.payload.id)
      ) {
        state.selectedFavorite.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedFavorite: [...state.selectedFavorite],
        ...sumFoodsFavorite(state.selectedFavorite),
      };

    case "REMOVE-ITEM-FAV":
      const newSelectedItemsFav = state.selectedFavorite.filter(
        (items) => items.id !== action.payload.id
      );
      return {
        ...state,
        selectedFavorite: [...newSelectedItemsFav],
        ...sumFoodsFavorite(newSelectedItemsFav),
      };

    case "ADD_WISHLIST":
      if (
        !state.selectedWishlist.find((item) => item.id === action.payload.id)
      ) {
        state.selectedWishlist.push({
          ...action.payload,
        });
      }
      return {
        ...state,
        selectedWishlist: [...state.selectedWishlist],
        ...sumItems(state.selectedWishlist),
      };

    case "REMOVE-ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        selectedWishlist: [...state.selectedWishlist],

        ...sumItems(newSelectedItems),
      };

    case "INCRESS":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };

    case "DECRESS":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };

    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        chekout: true,
      };
    case "CLEAR":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        chekout: false,
      };
    default:
      return state;
  }
};
export const CartContextBook = createContext();
const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContextBook.Provider value={{ state, dispatch }}>
      {children}
    </CartContextBook.Provider>
  );
};

export default CartContext;
