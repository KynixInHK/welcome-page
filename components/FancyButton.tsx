'use client';
import React from "react";
import style from "./FancyButton.module.scss"

export default function FancyButton({children, onClick}: {
    children: React.ReactNode,
    onClick?: () => void
}) {
    return <button className={ style.FancyButton } onClick={onClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {children}
    </button>
}