import {
  require_lib
} from "/build/_shared/chunk-H3ZOLN7U.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// src/ui/hooks/useLocalCart.ts
var import_local_storage = __toESM(require_lib());
var InitializeEmptyLocalCart = () => {
  return {
    items: {},
    cartId: "",
    state: "cart"
  };
};
function useLocalCart() {
  const [cart] = (0, import_local_storage.useLocalStorage)("cart", InitializeEmptyLocalCart());
  const update = (cart2) => {
    (0, import_local_storage.writeStorage)("cart", {
      ...cart2
    });
  };
  const isImmutable = () => {
    return cart.state === "placed" || cart.state === "paid";
  };
  return {
    cart,
    setWrappingData: (cartId, cartState) => {
      update({
        ...cart,
        cartId,
        state: cartState
      });
    },
    empty: () => {
      update({
        ...cart,
        ...InitializeEmptyLocalCart()
      });
    },
    isImmutable,
    isEmpty: () => {
      return Object.keys(cart.items).length === 0;
    },
    clone: () => {
      update({
        ...cart,
        cartId: ""
      });
    },
    add: (item, quantity = 1) => {
      if (isImmutable()) {
        return;
      }
      if (cart.items[item.sku]) {
        cart.items[item.sku].quantity = cart.items[item.sku].quantity + quantity;
      } else {
        cart.items[item.sku] = {
          sku: item.sku,
          name: item.name,
          price: item.price,
          quantity
        };
      }
      update(cart);
    },
    remove: (item) => {
      if (isImmutable()) {
        return;
      }
      if (cart.items[item.sku]) {
        if (cart.items[item.sku].quantity >= 1) {
          cart.items[item.sku].quantity--;
        }
      }
      const items = Object.keys(cart.items).reduce((accumulator, key) => {
        const item2 = cart.items[key];
        if (item2.quantity > 0) {
          accumulator[item2.sku] = item2;
        }
        return accumulator;
      }, {});
      update({
        ...cart,
        items
      });
    }
  };
}

export {
  useLocalCart
};
//# sourceMappingURL=/build/_shared/chunk-6SVMKKLW.js.map
