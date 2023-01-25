import {
  require_dist2 as require_dist
} from "/build/_shared/chunk-NS5SBDDR.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// src/use-cases/service-api/index.ts
var import_reactjs_hooks2 = __toESM(require_dist());

// src/use-cases/service-api/payments/crystal.ts
var import_reactjs_hooks = __toESM(require_dist());
async function sendPaidOrderWithCrystalCoin(serviceApiUrl, language, cart, customer) {
  const cartWrapper = await placeCart(serviceApiUrl, language, cart, customer);
  return await (0, import_reactjs_hooks.postJson)(serviceApiUrl + "/payment/crystal/coin/confirmed", {
    cartId: cartWrapper.cartId
  });
}
async function sendPaidOrderWithCrystalCard(serviceApiUrl, language, cart, customer, card) {
  const cartWrapper = await placeCart(serviceApiUrl, language, cart, customer);
  return await (0, import_reactjs_hooks.postJson)(serviceApiUrl + "/payment/crystal/card/confirmed", {
    cartId: cartWrapper.cartId,
    card
  });
}

// src/use-cases/service-api/index.ts
function placeCart(serviceApiUrl, language, cart, customer, options) {
  return (0, import_reactjs_hooks2.postJson)(serviceApiUrl + "/cart/place", {
    cartId: cart.cartId,
    locale: language,
    items: Object.values(cart.items),
    customer,
    options
  });
}
var ServiceAPI = ({ locale, language, serviceApiUrl }) => {
  return {
    stripe: {
      fetchPaymentIntent: (cart) => (0, import_reactjs_hooks2.postJson)(serviceApiUrl + "/payment/stripe/create", { cartId: cart.cartId })
    },
    quickpay: {
      fetchPaymentLink: (cart) => (0, import_reactjs_hooks2.postJson)(serviceApiUrl + "/payment/quickpay/create", { cartId: cart.cartId })
    },
    montonio: {
      fetchPaymentLink: (cart) => (0, import_reactjs_hooks2.postJson)(serviceApiUrl + "/payment/montonio/create", { cartId: cart.cartId }),
      fetchPickupPoints: () => (0, import_reactjs_hooks2.getJson)(serviceApiUrl + "/shipping/montonio/pickup-points")
    },
    klarna: {
      initiatePayment: (cart) => (0, import_reactjs_hooks2.postJson)(serviceApiUrl + "/payment/klarna/create", { cartId: cart.cartId })
    },
    razorpay: {
      initiatePayment: (cart) => (0, import_reactjs_hooks2.postJson)(serviceApiUrl + "/payment/razorpay/create", { cartId: cart.cartId }),
      receivePayment: (baseUrl, payload) => (0, import_reactjs_hooks2.postJson)(baseUrl + "/api/webhook/payment/razorpay/verify", payload)
    },
    fetchOrders: () => (0, import_reactjs_hooks2.getJson)(serviceApiUrl + "/orders"),
    fetchOrder: (orderId) => (0, import_reactjs_hooks2.getJson)(serviceApiUrl + "/orders/" + orderId),
    placeCart: (cart, customer, options) => placeCart(serviceApiUrl, language, cart, customer, options),
    registerAndSendMagickLink: (userInfos) => (0, import_reactjs_hooks2.postJson)(serviceApiUrl + "/magicklink/register", userInfos),
    sendMagickLink: (email, callbackPath) => (0, import_reactjs_hooks2.postJson)(serviceApiUrl + "/magicklink/register?callbackPath=" + callbackPath, {
      email,
      firstname: "",
      lastname: ""
    }),
    fetchCart: (cartId) => (0, import_reactjs_hooks2.getJson)(serviceApiUrl + "/cart/" + cartId),
    fetchRemoteCart: (cart) => (0, import_reactjs_hooks2.postJson)(serviceApiUrl + "/cart", {
      locale: language,
      items: Object.values(cart.items),
      cartId: cart.cartId,
      withImages: true
    }),
    sendPaidOrderWithCrystalCoin: (cart, customer) => sendPaidOrderWithCrystalCoin(serviceApiUrl, language, cart, customer),
    sendPaidOrderWithCrystalCard: (cart, customer, card) => sendPaidOrderWithCrystalCard(serviceApiUrl, language, cart, customer, card)
  };
};

export {
  ServiceAPI
};
//# sourceMappingURL=/build/_shared/chunk-TCD3P7AQ.js.map
