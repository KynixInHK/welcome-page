import {proxy} from "valtio/vanilla";

export const snakeStore = proxy({
    isSnake: false,
    setIsSnake: (snake: boolean) => {
        snakeStore.isSnake = snake
    }
})