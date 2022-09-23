import { createContext, useContext, useState } from "react";
import useCurrency from "../Hooks/useCurrency"
const CartContext = createContext();

const useCartContext = () => useContext(CartContext);


const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const { formatter } = useCurrency();


  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      setCartList(
        cartList.map((product) => {
          return product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product;
        })
      );
    } else {
      setCartList([...cartList, { ...item, quantity }]);
    }
  };

  console.log(cartList);
  
  const removeItem = (id) => {
    const newCart = cartList.filter((product) => product.id !== id);
    setCartList(newCart);
  };

  const clear = () => {
    setCartList([]);
  };

  const isInCart = (id) =>
    cartList.some((product) => product.id === id) ? true : false;

    const totalQuantity = () => {
      return cartList.reduce((acc, product) => acc + product.quantity, 0);
    };

    const totalPrice = () => {
      return formatter.format(
        cartList.reduce((acc, product) => acc + product.precioOferta * product.quantity, 0)
      );
    };

    const totalFinal = () => {
      return formatter.format(
        cartList.reduce(
          (acc, product) => acc + product.precioOferta * product.quantity,
          0
        )
      );
    };
  

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeItem,
        clear,
        isInCart,
        totalQuantity,
        totalPrice,
        totalFinal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider, useCartContext };