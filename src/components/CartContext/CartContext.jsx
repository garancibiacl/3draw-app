import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const addToCart  = (nombre, id, quantity) => {
        if (cartList.length === 0) {
            setCartList([{ nombre: nombre, id: id, cant: quantity }])
        } else {
            const findItemInCart = cartList.find(producto => producto.id === id)
            if (findItemInCart) {
                findItemInCart.cant = findItemInCart.cant + quantity
                setCartList([...cartList])
            } else {
                setCartList([...cartList, { nombre: nombre, id: id, cant: quantity }])
            }
        }
    }

    const removeItem = (itemId) => {
        const filteredArray = cartList.filter(
            (item) => item.id !== itemId
        )
        setCartList(filteredArray)
        console.log(setCartList)
    }

    const clear = () => { setCartList([])}

    const isInCart = (id) => { cartList.some((item) => item.id === id)}


    const cantidadTotal = () => {
        if(cartList.length === 0 ){
            return ""
        }else {
            const resultado = cartList.reduce((acc, curr) => acc + curr.cant, 0)
            return resultado
        }
    }    

    return (
        <CartContext.Provider value={{ cartList, addToCart, removeItem, clear, isInCart, cantidadTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartContextProvider, useCartContext } 