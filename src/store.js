import { reactive } from "vue"

export const store = reactive({
    path_logo: "./assets/img/dark-logo.png",
    navigationVoices: [
        {
            voice: "Home",
            actions: ["Action one", "Action two"]
        },
        {
            voice: "Pages",
            actions: ["Action one", "Action two"]
        },
        {
            voice: "Courses",
            actions: ["Action one", "Action two"]
        },
        {
            voice: "Features",
            actions: ["Action one", "Action two"]
        },
        {
            voice: "Blog",
            actions: ["Action one", "Action two"]
        },
        {
            voice: "Shop",
            actions: ["Action one", "Action two"]
        }
    ],
    nations: [
        {
            language: "en",
            flagURL: "./assets/img/en.png",
            extendedName: "English"
        },
        {
            language: "de",
            flagURL: "./assets/img/de.png",
            extendedName: "Deutschland"
        },
        {
            language: "fr",
            flagURL: "./assets/img/fr.png",
            extendedName: "France"
        }

    ],
    selectLanguage: {
        language: "en",
        flagURL: "./assets/img/en.png",
        extendedName: "English"
    },
    getImagePath(imgPath) {
        return new URL(imgPath, import.meta.url).href;
    }
})