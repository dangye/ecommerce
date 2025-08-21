import { createContext, ReactNode, useState } from "react";

interface CartContextData {
    cart: CartProps[];
}

interface CartProps {
    id: number;
    cover:string;
    description:string;
    price:number;
    title:string;
    amount: number;
    total: number;
}

export const CartContext = createContext({} as CartContextData)

function CartProvider(){

    const [cart, setCart] = useState([])

    return(
        <CartContext.Provider value={{cart}}>

        </CartContext.Provider>
    )
}