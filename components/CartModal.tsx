import { useState, useEffect } from "react"
export default function CartModal({ cartItems }) {
    console.log(cartItems)
    return (
        <div>
            {/* sumar los items, sumar los prices remove child if the items is 0 */}
            <h4 className="text-2xl">Your Order</h4>
            {cartItems.map((cart) => {
                const { title, description, price, counter } = cart

                const [items, setitems] = useState(counter);

                const add = () => {
                    setitems(items + 1)
                }
                const sub = () => {
                    if (items < 1) {
                        return
                    }
                    setitems(items - 1)
                }
// setItems()
                return (
                    <div className="flex flex-col">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <div className="bg-green-100 flex justify-between">
                            <p className="">$ {Math.round((price * items) * 100) / 100}</p>
                            <button onClick={sub} > - </button>
                            <p>{items}</p>
                            <button onClick={add}> + </button>
                        </div>
                    </div>
                )
            })}
            <button className="w-36 self-center rounded-md border border-transparent shadow-sm mt-3 px-4 py-2 bg-green-600 font-medium text-white focus:outline-none focus:ring-2 focus:ring-green-400 hover:bg-green-700 sm:w-auto sm:text-sm">To Buy</button>
            <p>Total:</p>
            {}
            <div>
                {/* <p>{items.reduce(((accumulator, currentValue) => accumulator + currentValue), 0)}</p> */}

            </div>
        </div>
    )
}