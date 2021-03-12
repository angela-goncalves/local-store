import * as React from "react";
import Modal from 'components/Modal'
import ProductCardModal from "./ProductCardModal";


export default function ProductCard({ title, description, price, color2, setAmount}) {
    const [showDialog, setShowDialog] = React.useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);

    const addToCart = (counter: number) => {
        setAmount((prev) => [...prev, {title, description, price, color2, counter, total: price*counter}])
        close()
    } 
    return (
        <div className="py-3 grid justify-items-center sm:flex sm:flex-wrap sm:justify-center">
            <div className="sm:flex sm:flex-col bg-white rounded-xl m-2">
                <div className="flex">
                    <img src="../png/food-example.jpg" alt={`image of ${title}`} className="w-24 h-24 rounded-tl-xl sm:w-36 sm:h-32 " />
                    <div className="pl-2 pt-2 w-full">
                        <h3>{title}</h3>
                        <p className="text-gray-500 h-20 w-48 pr-1 overflow-hidden sm:w-36">{description}</p>
                    </div>
                </div>
                <div className="text-center mx-3 my-2 flex justify-between ">
                    <button onClick={open} className={`py-1 w-32 rounded-md ${color2.secundary} text-white border border-transparent focus:outline-none focus:ring-2 ${color2.focusRing} ${color2.hover}`}>
                        Add
                    </button>
                    <p className="self-center text-green-600 font-semibold ml-1">$ {price}</p>
                </div>
            </div>
            <Modal
                isOpen={showDialog}
                close={close}
            >
                <ProductCardModal
                    title={title}
                    description={description}
                    price={price}
                    addToCart={addToCart}
                />
            </Modal>
            
        </div>
    )
}