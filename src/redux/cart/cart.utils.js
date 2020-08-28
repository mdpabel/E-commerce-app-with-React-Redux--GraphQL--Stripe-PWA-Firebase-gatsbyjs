export const addToCart = (cartItems, newItem) => {
  const items = cartItems.find((item) => item.id === newItem.id);
  if (items) {
    return cartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    return [...cartItems, { ...newItem, quantity: 1 }];
  }
};

export const removeFromCart = (cartItems, removeItem) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === removeItem.id
  );
  console.log("existingItem", existingItem);
  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== removeItem.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === removeItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
