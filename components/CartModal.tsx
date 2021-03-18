import { useState, useEffect } from "react"
export default function CartModal({ cartItems, deleteItem }) {
    
    const [items, setitems] = useState(1);
    const add = () => {
        setitems(items + 1)
    }
    const sub = () => {
        if (items === 1) {
            return
        }
        setitems(items - 1)
    }
//counter = acumulador 
//counter + items
    return (
        <div className="">
            <h4 className="text-2xl">Your Order</h4>
            {cartItems.map((cart) => {

                const { title, description, price, id, counter } = cart
                console.log(cart)
                return (
                    <div key={`${id}_${title}`} className="flex flex-col">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <div className="bg-green-100 flex justify-between">
                            <p className="">$ {Math.round((price * items) * 100) / 100}</p>
                            <button onClick={sub}> - </button>
                            <p>{items}</p>
                            <button onClick={add}> + </button>
                            <button onClick={() => deleteItem(id)}> x </button>
                        </div>
                    </div>
                )
            })}
            <p>Total:</p>
            <button className="w-36 self-center rounded-md border border-transparent shadow-sm mt-3 px-4 py-2 bg-green-600 font-medium text-white focus:outline-none focus:ring-2 focus:ring-green-400 hover:bg-green-700 sm:w-auto sm:text-sm">
                To Buy
            </button>
            
        </div>
    )
} 