export const addItemToCart = ( cardItems, itemToAdd ) => {
  const existingCardItems = cardItems.find( cartItem => cartItem.id === itemToAdd.id);

  if (existingCardItems) {
    return cardItems.map( 
      cartItem => cartItem.id === itemToAdd.id ? 
      { ...cartItem, quantity: cartItem.quantity + 1 } 
      : cartItem
    );
  }

  return [...cardItems, { ...itemToAdd, quantity: 1 }];
}