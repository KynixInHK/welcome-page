'use client';

import {useSnapshot} from "valtio/react";
import {showStore} from "@/store";
import WebTerminal from "@/components/WebTerminal";
import FunctionPanel from "@/components/FunctionPanel";
import CSSTransition from "react-transition-group/CSSTransition";
import React from "react";
import SnakeGame from "@/components/SnakeGame";
import {snakeStore} from "@/store/modules/snake";

export default function PanelArea() {
    const {show, setShow} = useSnapshot(showStore)
    const {isSnake, setIsSnake} = useSnapshot(snakeStore)

    return <CSSTransition
        in={show}
        classNames={"show"}
        timeout={800}
        unmountOnExit
    ><FunctionPanel>
        { isSnake ? <SnakeGame/> : <WebTerminal/> }
    </FunctionPanel></CSSTransition>
}