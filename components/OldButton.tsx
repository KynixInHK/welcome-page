'use client';

import React, {ReactHTML} from "react";

export default function OldButton({children, onClick}: {
    children: React.ReactNode,
    onClick: () => void
}) {
    return <button
        className={"outline-none m-0 p-0 bg-gray-300 text-black"}
        onClick={onClick}
    >{children}</button>
}