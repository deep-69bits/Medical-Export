import {
  ServiceAPI
} from "/build/_shared/chunk-SIM2ZLJC.js";
import {
  useLocalCart
} from "/build/_shared/chunk-OU3A6Y3Z.js";
import {
  useAppContext
} from "/build/_shared/chunk-CN7AHYTM.js";
import {
  require_react
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

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
//# sourceMappingURL=/build/_shared/chunk-FWTFVG4E.js.map
