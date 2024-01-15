import cartActionTypes from "./action-types";

const initialState = {
  products: [],
  totalProducts: 0,
  totalValue: 0,
};

function updateTotalProducts(products) {
  return products.reduce((total, product) => total + product.quantity, 0);
}

function updateTotalValue(products) {
  return products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
}

const cartReducer = (state = initialState, action) => {
  let updatedProducts;

  switch (action.type) {
    case cartActionTypes.ADD_PRODUCT:
      const alreadyAdded = state.products.some(
        (product) => product.id === action.payload.id
      );

      if (alreadyAdded) {
        updatedProducts = state.products.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                quantity: action.payload.quantity + product.quantity,
              }
            : product
        );
      } else {
        updatedProducts = [...state.products, action.payload];
      }

      return {
        ...state,
        products: updatedProducts,
        totalProducts: updateTotalProducts(updatedProducts),
        totalValue: updateTotalValue(updatedProducts),
      };

    case cartActionTypes.REMOVE_PRODUCT:
      updatedProducts = state.products.filter(
        (product) => product.id !== action.payload
      );

      return {
        ...state,
        products: updatedProducts,
        totalProducts: updateTotalProducts(updatedProducts),
        totalValue: updateTotalValue(updatedProducts),
      };

    case cartActionTypes.INCREMENT_PRODUCT:
      updatedProducts = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );

      return {
        ...state,
        products: updatedProducts,
        totalProducts: updateTotalProducts(updatedProducts),
        totalValue: updateTotalValue(updatedProducts),
      };

    case cartActionTypes.DECREMENT_PRODUCT:
      updatedProducts = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      return {
        ...state,
        products: updatedProducts,
        totalProducts: updateTotalProducts(updatedProducts),
        totalValue: updateTotalValue(updatedProducts),
      };
    default:
      return state;
  }
};

export default cartReducer;
