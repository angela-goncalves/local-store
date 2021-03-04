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
        <div>
            <button onClick={open} type="button" className="p-2 bg-blue-500">
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