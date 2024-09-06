'use client';

import {ChangeEvent, KeyboardEventHandler, RefObject, useEffect, useRef, useState} from "react";
import {runCommand} from "@/util/util";
import {useSnapshot} from "valtio/react";
import {showStore} from "@/store";
import {snakeStore} from "@/store/modules/snake";

export default function WebTerminal() {
    const prefix = "guest@welcome-page$ "
    const { show, setShow } = useSnapshot(showStore)
    const { isSnake, setIsSnake } = useSnapshot(snakeStore)

    type his = {
        id: number,
        command: string,
        output: JSX.Element
    }

    let [history, setHistory] = useState<his[]>([])

    const inputRef: RefObject<HTMLInputElement> = useRef(null);
    const divRef: RefObject<HTMLDivElement> = useRef(null);

    let [commandNow, setCommandNow] = useState<string>("")
    const handleInputEvent = (event: ChangeEvent<HTMLInputElement>) => {
        setCommandNow(event.target.value)
    }

    // 永远 focus
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []); // 空依赖数组意味着这个 effect 只在组件挂载时运行一次

    useEffect(() => {
        const handleBlur = () => {
            inputRef.current!.focus();
        };

        document.addEventListener('click', handleBlur);

        return () => {
            document.removeEventListener('click', handleBlur);
        };
    }, []); // 这个 effect 用于添加和清理事件监听器

    // 永远滚动到底部
    useEffect(() => {
        if (divRef.current) {
            divRef.current.scrollTop = divRef.current.scrollHeight;
        }
    }, [history]); // 仅在 history 改变时滚动到底部

    // 处理 keydown
    useEffect(() => {
        const handleKeyDown= (event: KeyboardEvent) => {
            if ((event.ctrlKey && event.key === "c") || (event.key === "Enter" && commandNow === "")) {
                console.log("Control-C")
                event.preventDefault()

                setHistory(prevState => [...prevState, {
                    id: prevState.length,
                    command: commandNow,
                    output: <></>
                }])

                setCommandNow("")
            } else if (event.key === "Enter" && commandNow !== "") {
                let output = runCommand(commandNow)
                if (output.props.children === "clear") {
                    setHistory([])
                    setCommandNow("")
                    return
                }

                if (output.props.children === "exit") {
                    setShow(false)
                    return
                }

                if (output.props.children === "snake") {
                    setIsSnake(true)
                }

                setHistory(prevState => [...prevState, {
                    id: prevState.length,
                    command: commandNow,
                    output: output
                }])
                setCommandNow("")
            }
        }

        if (inputRef.current) {
            inputRef.current.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            if (inputRef.current) {
                inputRef.current.removeEventListener('keydown', handleKeyDown);
            }
        };
    }, [commandNow, history]);

    return <div className={"text-lg h-full overflow-scroll"} ref={divRef}>
        <p>欢迎使用 Web 终端！输入 help 以获取可用命令；输入 exit 以退出 Web 终端。</p>
        { history.map(item => (
            <div key={item.id}>
                <div><span>{prefix}</span> {item.command} </div>
                <div>{item.output}</div>
            </div>
        ))}

        <div className={"flex"}>
            <span className={"mr-2"}>{prefix}</span>
            <input
                ref={inputRef}
                autoFocus
                type="text"
                className={"outline-none bg-transparent flex-grow"}
                value={commandNow}
                onChange={handleInputEvent}
            />
        </div>
    </div>
}