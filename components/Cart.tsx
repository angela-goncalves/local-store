import * as React from "react";
import CartModal from "./CartModal";
import Modal from "./Modal";


export default function Cart({ cartItems }) {
    
    const [showDialog, setShowDialog] = React.useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);

    const sum = (a, b) => {
        return a + b
    }
    
    const arr = (x) => x.map((item) => item.counter).reduce(sum, 0)
    const items = arr(cartItems)

    const total = (p) => p.map((price) => price.total).reduce(sum, 0)
    const totals = total(cartItems)

    return (
        <div className="fixed bottom-1 left-1">
            <button onClick={open} type="button" className="rounded-md border border-transparent mt-3 px-4 py-2 bg-white text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-gray-200">
                <p> Cart subtotal ({items}): $ {Math.round(totals * 100) / 100} </p>
            </button>
            <Modal
                isOpen={showDialog}
                close={close}
            >
                <CartModal
                cartItems={cartItems}
                />
            </Modal>
        </div>
    )
}