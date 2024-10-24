const getStoredCart = () => {
  const storedCarCartString = localStorage.getItem("carCart");

  if (storedCarCartString) {
    return JSON.parse(storedCarCartString);
  }
  return [];
};

const saveCarCartToLocalStorage = (carCart) => {
  const carCartStringified = JSON.stringify(carCart);
  localStorage.setItem("carCart", carCartStringified);
};

const carCartAddToLocalStorage = (id) => {
  const carCart = getStoredCart();
  carCart.push(id);
  saveCarCartToLocalStorage(carCart);
};

export { carCartAddToLocalStorage, getStoredCart };
