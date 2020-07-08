export const addItemToCart = (cartItems, itemToAdd) => {
	const existingCartItems = cartItems.find(
		(cartItem) => cartItem.id === itemToAdd.id
	);

	if (existingCartItems) {
		return cartItems.map((cartItem) =>
			cartItem.id === itemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const decreaseQuantityCartItem = (cartItems, itemToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === itemToRemove.id
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter((item) => item.id !== existingCartItem.id);
	}

	return cartItems.map((cartItem) =>
		cartItem.id === itemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
	return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
};
