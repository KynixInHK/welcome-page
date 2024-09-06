import {proxy} from "valtio/vanilla";

export const showStore = proxy({
    show: false,
    setShow: (show: boolean) => {
        showStore.show = show
    }
})