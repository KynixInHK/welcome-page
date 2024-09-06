'use client';

import FancyButton from "@/components/FancyButton";
import {useSnapshot} from "valtio/react";
import {showStore} from "@/store";

export default function ButtonGroup() {
    const {show, setShow} = useSnapshot(showStore)

    return <div className={"flex flex-row justify-center items-center m-8"}>
        <FancyButton onClick={() => setShow(true)}>了解我们</FancyButton>
        {/*<FancyButton>加入我们</FancyButton>*/}
    </div>
}