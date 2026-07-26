import { useState } from "react";

export default function Popup({ isOpen, onClose }) {

    // in milliseconds
    const ANIMATION_DURATION = 250;


    return (
        <>
            <div className={`transition-opacity duration-${ANIMATION_DURATION} fixed opacity-0 bottom-0 left-0 right-0 bg-black/75 z-998`}
                style={{ opacity: isOpen ? "70%" : "0" }}
                onClick={onClose}
            />

            <div className="">

            </div>

        </>
    )
}