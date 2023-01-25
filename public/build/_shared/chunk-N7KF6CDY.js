import {
  ServiceAPI
} from "/build/_shared/chunk-AZF6Y26M.js";
import {
  useLocalCart
} from "/build/_shared/chunk-QQPGKNZF.js";
import {
  useAppContext
} from "/build/_shared/chunk-J22I6NOK.js";
import {
  require_react
} from "/build/_shared/chunk-MSUG4FUW.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// src/ui/hooks/useRemoteCart.ts
var import_react = __toESM(require_react());
function useRemoteCart() {
  const { cart, setWrappingData } = useLocalCart();
  const { state: appContextState } = useAppContext();
  const [state, setState] = (0, import_react.useState)({
    loading: true,
    hydratedCart: null
  });
  (0, import_react.useEffect)(() => {
    (async () => {
      setState({
        ...state,
        loading: true
      });
      const api = ServiceAPI({
        language: appContextState.language,
        serviceApiUrl: appContextState.serviceApiUrl
      });
      const cartWrapper = await api.fetchRemoteCart(cart);
      if (cart.cartId !== cartWrapper.cartId || cart.state !== cartWrapper.state) {
        setWrappingData(cartWrapper.cartId, cartWrapper.state);
      }
      setState({
        ...state,
        loading: false,
        hydratedCart: cartWrapper
      });
    })();
  }, [cart]);
  return {
    loading: state.loading,
    remoteCart: state.hydratedCart
  };
}

export {
  useRemoteCart
};
//# sourceMappingURL=/build/_shared/chunk-N7KF6CDY.js.map
