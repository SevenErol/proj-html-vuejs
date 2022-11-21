import { reactive } from "vue"

export const store = reactive({
    path_logo: "./assets/img/dark-logo.png",
    getImagePath(imgPath) {
        return new URL(imgPath, import.meta.url).href;
    }
})