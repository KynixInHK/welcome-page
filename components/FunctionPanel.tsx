'use client';

import React from "react";

export default function FunctionPanel({children}: {
    children: React.ReactNode
}) {
    return <div className={"fixed top-0 left-1/2 -translate-x-1/2 w-2/3 h-2/3 bg-black p-2"} style={{boxShadow: "0px 0px 8px 3px rgb(16,185,129)"}}>
        {children}
    </div>
}