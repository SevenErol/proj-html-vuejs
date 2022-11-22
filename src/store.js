import { reactive } from "vue"

import ApproachOne from './components/ApproachOne.vue';
import ApproachTwo from './components/ApproachTwo.vue';
import ApproachThree from './components/ApproachThree.vue';
import ApproachFour from './components/ApproachFour.vue';
import ApproachFive from './components/ApproachFive.vue';
import ApproachSix from './components/ApproachSix.vue';


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
    approach: [
        {
            title: "One to One",
            description: "Getting the necessary clarity about the current state to help you improve your game.",
            component: ApproachOne
        },
        {
            title: "Anywhere",
            description: "Access to valuable and portable program which allow you to setup and live anywhere you want.",
            component: ApproachTwo
        },
        {
            title: "On time",
            description: "Punctuality is our top priority because is an essential criteria to assess a program quality.",
            component: ApproachThree
        },
        {
            title: "Online Courses",
            description: "Online business coaching now offers you a very powerful way to empower your busines success.",
            component: ApproachFour
        },
        {
            title: "Consulting",
            description: "You will get a clear sense of direction for your business, thorough assessment and faster results.",
            component: ApproachFive
        },
        {
            title: "Self Development",
            description: "Business Coaching often your focus and develop you both in a professional and personal way.",
            component: ApproachSix
        }
    ],
    getImagePath(imgPath) {
        return new URL(imgPath, import.meta.url).href;
    }
})