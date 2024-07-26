import { Icons } from "../assets/icons";
import trainerOne from "../assets/images/adidas-one.svg";
import trainerTwo from "../assets/images/trainer-two.svg";
import trainerThree from "../assets/images/trainer-three.svg";
import trainerFour from "../assets/images/trainer-four.svg";
import smallTrainer from "../assets/images/img-one.svg";
import smallTrainerTwo from "../assets/images/img-two.svg";
import smallTrainerThree from "../assets/images/img-three.svg";
import smallTrainerFour from "../assets/images/img-four.svg";
import smallTrainerFive from "../assets/images/img-five.svg";
import smallTrainerSix from "../assets/images/img-six.svg";
import adidasIcon from "../assets/images/adidas-icon.jpg";
import lineTopIcon from "../assets/images/top-icon.svg";
import lineTopIconTwo from "../assets/images/top-icon-two.svg";
import bigImg from "../assets/images/big-img.svg";
import smallTrainerEight from "../assets/images/img-eight.svg";
import Delivery from "../assets/images/Delivery.svg";
import Hanger from "../assets/images/Hanger.svg";
import Refresh from "../assets/images/Refresh.svg";
import adidas from "../assets/images/adidas.svg";
import User from "../assets/images/user.svg";
import Like from "../assets/images/Like.svg";
import Dislike from "../assets/images/Dislike.svg";
export const menu = [
    {
        id: 1,
        title_uz: "Home",
        title_ru: "",
        path: "/",
    },
    {
        id: 1,
        title_uz: "Erkaklar",
        title_ru: "Мужчинам",
        path: "/men",
        icon: <Icons.person />,
    },
    {
        id: 2,
        title_uz: "Ayollar",
        title_ru: "Женщинам",
        path: "/men",
        icon: <Icons.skirt />,
    },
    {
        id: 3,
        title_uz: "Sport",
        title_ru: "Спорт",
        path: "/sport",
        icon: <Icons.sport />,
    },
    {
        id: 4,
        title_uz: "O'yinlar va o'yin-kulgilar",
        title_ru: "Игры и развлечения",
        path: "/men",
        icon: <Icons.game />,
    },
    {
        id: 5,
        title_uz: "Elektronika",
        title_ru: "Электроника",
        path: "/men",
        icon: <Icons.radio />,
    },
    {
        id: 6,
        title_uz: "Oshxona uchun",
        title_ru: "Для кухни",
        path: "/men",
        icon: <Icons.cook />,
    },
];
export const menuTitle = [
    {
        id: 1,
        title_ru: "Главная /",
        title_uz: "Bosh sahifa /",
    },
    {
        id: 1,
        title_ru: "Спорт /",
        title_uz: "Sport /",
    },
    {
        id: 1,
        title_ru: "Спортивные кроссовки",
        title_uz: "Sport poyabzali",
    },
];

export const menuSelect = [
    {
        id: 1,
        title_uz: "Yetkazib berish muddati",
        title_ru: "Срок доставки",
        icon: <Icons.topArrow />,
    },
];
export const cardPage = [
    {
        id: 1,
        img: trainerOne,
        icon: <Icons.like />,
        title: "Yeezy Boost 350 V2 “Clay”Orange",
        starIcons: <Icons.fillStar />,
        starSpan: "(31)",
        starIcon: <Icons.star />,
        starCheckbox: <Icons.checkbox />,
        span: "в наличии",
        btn: "1 567 000 сум ",
        btnSpan_ru: "в месяц",
        btnSpan_uz: "oyiga",
        money: "15 999 000 сум",
        path: "/trainers",
    },
];
export const cardPageTwo = [
    {
        id: 1,
        img: trainerTwo,
        icon: <Icons.like />,
        title: "New Balance Fresh Foam Links SL - White Green",
        starIcons: <Icons.fillStar />,
        starSpan: "(31)",
        starIcon: <Icons.star />,
        starCheckbox: <Icons.checkbox />,
        span: "в наличии",
        btn: "1 567 000 сум ",
        btnSpan_ru: "в месяц",
        btnSpan_uz: "oyiga",
        money: "15 999 000 сум",
        path: "/trainers",
    },
];
export const cardPageThree = [
    {
        id: 1,
        img: trainerThree,
        icon: <Icons.like />,
        title: "Nike Air Max Bolt Men’s Shoe",
        starIcons: <Icons.fillStar />,
        starSpan: "(31)",
        starIcon: <Icons.star />,
        starCheckbox: <Icons.checkbox />,
        span: "в наличии",
        btn: "1 567 000 сум ",
        btnSpan_ru: "в месяц",
        btnSpan_uz: "oyiga",
        money: "15 999 000 сум",
        path: "/trainers",
    },
];
export const cardPageFour = [
    {
        id: 1,
        img: trainerFour,
        icon: <Icons.like />,
        title: "FILA Disruptor Orange",
        starIcons: <Icons.fillStar />,
        starSpan: "(31)",
        starIcon: <Icons.star />,
        starCheckbox: <Icons.checkbox />,
        span: "в наличии",
        btn: "1 567 000 сум ",
        btnSpan_ru: "в месяц",
        btnSpan_uz: "oyiga",
        money: "15 999 000 сум",
        path: "/trainers",
    },
];
export const trainers = [
    {
        id: 1,
        topIcon: lineTopIcon,
        topIconTwo: lineTopIconTwo,
        imgFive: smallTrainerFour,
        imgSix: smallTrainerFive,
        imgSeven: smallTrainerSix,
        imgEight: smallTrainerEight,
        icon: Delivery,
        iconTwo: Hanger,
        iconThree: Refresh,
        adidasIcon: adidasIcon,
        bigImg: bigImg,
        adidas: adidas,
        type: [
            {
                id: 1,
                img: smallTrainer,
            },
            {
                id: 2,
                img: smallTrainerTwo,
            },
            {
                id: 3,
                img: smallTrainerThree,
            },
            {
                id: 4,
                img: smallTrainerFour,
            },
        ],
    },
];

export const comments = [
    {
        id: 1,
        userImg: User,
        name: "Alexei Poliakov",
        date: "04.12.2022",
        trainerImg: smallTrainerTwo,
        trainerImgTwo: smallTrainerFour,
        trainerImgThree: smallTrainer,
        comment: "Неплохие крассовки, качественные мне нравится, но маломерки",
        like: Like,
        dislike: Dislike,
    },
    {
        id: 2,
        userImg: User,
        name: "Alexei Poliakov",
        date: "04.12.2022",
        trainerImg: smallTrainerTwo,
        trainerImgTwo: smallTrainerFour,
        trainerImgThree: smallTrainer,
        comment: "Неплохие крассовки, качественные мне нравится, но маломерки",
        like: Like,
        dislike: Dislike,
    },
    {
        id: 3,
        userImg: User,
        name: "Alexei Poliakov",
        date: "04.12.2022",
        trainerImg: smallTrainerTwo,
        trainerImgTwo: smallTrainerFour,
        trainerImgThree: smallTrainer,
        comment: "Неплохие крассовки, качественные мне нравится, но маломерки",
        like: Like,
        dislike: Dislike,
    },
    {
        id: 4,
        userImg: User,
        name: "Alexei Poliakov",
        date: "04.12.2022",
        trainerImg: smallTrainerTwo,
        trainerImgTwo: smallTrainerFour,
        trainerImgThree: smallTrainer,
        comment: "Неплохие крассовки, качественные мне нравится, но маломерки",
        like: Like,
        dislike: Dislike,
    },
];
