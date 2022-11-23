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
    helpCards: [
        {
            imageURL: "./assets/img/home-business-service-slide-01-480x298.jpg",
            title: "Consultative Training",
            paragraph: "With a coach addressing multiple issues that are off balance, affecting your business in various unconsidered ways.",
            discover: "Discover more"
        },
        {
            imageURL: "./assets/img/home-business-service-slide-02-480x298.jpg",
            title: "Real Deal Coaching",
            paragraph: "Bring an exceptionally powerful opportunity. Being able to accept, to work with that opportunity.",
            discover: "Discover more"
        },
        {
            imageURL: "./assets/img/home-business-service-slide-03-480x298.jpg",
            title: "Advisor Training Program",
            paragraph: "Getting high quality, entrepeneur mindset driven online business coaching, is what is needed.",
            discover: "Discover more"
        }
    ],
    offers: [
        {
            imageURL: "./assets/img/course-02-443x600.jpg",
            price: "$40.00",
            description: "Learning to Write as a professional author"
        },
        {
            imageURL: "./assets/img/stock-full-hd-03-443x600.jpg",
            price: "Free",
            description: "Customer-centric info-tech strategies"
        },
        {
            imageURL: "./assets/img/stock-full-hd-04-443x600.jpg",
            price: "$19.00",
            description: "Open Programming Courses for Everyone: Python"
        },
        {
            imageURL: "./assets/img/stock-full-hd-06-443x600.jpg",
            price: "$26.00",
            description: "Academic Listening and Note-taking"
        }
    ],
    faq: [
        {
            question: "How can we help?",
            answer: "How many courses you have been on, using however many techniques and methods. Unless you have come to realize the value of mindset, the you have yet to understand How success comes.",
            visible: true
        },
        {
            question: "Why would i need a businness coach?",
            answer: "How many courses you have been on, using however many techniques and methods. Unless you have come to realize the value of mindset, the you have yet to understand How success comes.",
            visible: false
        },
        {
            question: "What is one-on-one coaching?",
            answer: "How many courses you have been on, using however many techniques and methods. Unless you have come to realize the value of mindset, the you have yet to understand How success comes.",
            visible: false
        }
    ],
    thumbYoutube: "./assets/img/home-business-video-poster-670x450.jpg",
    iconYoutube: "./assets/img/icon-youtube-play.png",
    events: [
        {
            location: "Texas, US",
            place: "StoryTelling Workshop",
            date: {
                day: "22",
                month: "NOV"
            }
        },
        {
            location: "New York, US",
            place: "Painting Art Contest 2020",
            date: {
                day: "10",
                month: "OCT"
            }
        },
        {
            location: "Hamburg, Germany",
            place: "International Art Fair 2020",
            date: {
                day: "23",
                month: "NOV"
            }
        },
        {
            location: "Illinois, US",
            place: "Street Performance: Call for Artist",
            date: {
                day: "15",
                month: "DEC"
            }
        },
        {
            location: "Illinois, US",
            place: "Consumer Food Safety Education Conference",
            date: {
                day: "22",
                month: "JUL"
            }
        },
        {
            location: "Dubai",
            place: "How meditation improve your mental health?",
            date: {
                day: "12",
                month: "AUG"
            }
        }
    ],
    reviews: [
        {
            disclaimer: "High level of efficiency and scientific teaching methods",
            review: "I am free to learn at my own pace, follow my own schedule and choose the subject i want to learn from the syllabus. Great study portal for people like me.",
            avatar: "./assets/img/testimonial-avata-02.jpg",
            name: "MINA HOLLACE",
            work: "/freelance"
        },
        {
            disclaimer: "High level of efficiency and scientific teaching methods",
            review: "I am free to learn at my own pace, follow my own schedule and choose the subject i want to learn from the syllabus. Great study portal for people like me.",
            avatar: "./assets/img/testimonial-avata-04.jpg",
            name: "MADLEY PONDOR",
            work: "/IT specialist"
        },
        {
            disclaimer: "High level of efficiency and scientific teaching methods",
            review: "I am free to learn at my own pace, follow my own schedule and choose the subject i want to learn from the syllabus. Great study portal for people like me.",
            avatar: "./assets/img/testimonial-avata-01.jpg",
            name: "MINA HOLLACE",
            work: "/freelance"
        },
        {
            disclaimer: "High level of efficiency and scientific teaching methods",
            review: "I am free to learn at my own pace, follow my own schedule and choose the subject i want to learn from the syllabus. Great study portal for people like me.",
            avatar: "./assets/img/testimonial-avata-03.jpg",
            name: "FLORENCE THEMES",
            work: "/Multimedia Admin"
        }
    ],
    getImagePath(imgPath) {
        return new URL(imgPath, import.meta.url).href;
    }
})

