import { useState } from "react"

export default function ProductCardModal({ title, description, price }) {
    const [counter, setCounter] = useState(1);  
    const add = () => {
        setCounter(counter + 1)
    }
    const sub = () => {
        if (counter === 1){
            return
        }
        setCounter(counter - 1)
    }

    return (

        <div className="bg-white text-left overflow-hidden rounded-2xl shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-80">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6">
                <div className="sm:flex sm:flex-col sm:items-start">
                    <img src="/png/food-example.jpg" className="h-auto w-full rounded-lg" />
                    <div className="mt-3">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            {title}
                        </h3>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500 text-justify">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-3 sm:px-6 flex flex-col  ">
                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-700">
                        Cantidad
                        </p>
                    <div className="flex justify-around items-center">
                        <button onClick={sub} type="button" className={`justify-center rounded-full border w-6 h-6 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 font-medium hover:bg-gray-100 sm:mt-0 sm:ml-3 sm:text-sm ${counter === 1 ? "hidden" : ""}`}>
                            <p className="self-center px-1 pb-2">-</p>
                        </button>
                        <p className="ml-3">{counter}</p>
                        <button onClick={add} type="button" className="ml-3 justify-center rounded-full border w-6 h-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 bg-white font-medium hover:bg-gray-100 sm:mt-0 sm:ml-3 sm:text-sm">
                            <p className="self-center px-1 pb-2">+</p>
                        </button>
                    </div>
                </div>
                <p>Total: $ {Math.round(price) * counter}</p>
                <button type="button" className="w-36 self-center rounded-md border border-transparent shadow-sm mt-3 px-4 py-2 bg-green-600 font-medium text-white focus:outline-none focus:ring-2 focus:ring-green-400 hover:bg-green-700 sm:w-auto sm:text-sm">
                    Add to cart
                    </button>
            </div>
        </div>
    )
}