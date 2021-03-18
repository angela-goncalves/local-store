import * as React from "react";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";

export default function Modal({children, isOpen, close}) {

    return (
        <DialogOverlay isOpen={isOpen} onDismiss={close} className="bg-gray-500">
            <div className="fixed z-10 bottom-0 right-0 overflow-auto">

                <div className="flex items-center justify-center min-h-screen py-4 px-4 text-center sm:block sm:pb-0">

                    <DialogContent aria-label='modal'>
                    {children}
                    </DialogContent>

                </div>
            </div>
        </DialogOverlay>
    )
}