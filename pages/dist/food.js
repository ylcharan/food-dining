"use strict";
exports.__esModule = true;
var react_1 = require("react");
var FoodCard_1 = require("@/components/FoodCard");
var burger_jpeg_1 = require("../public/burger.jpeg");
var dumBiriyani_jpeg_1 = require("../public/dumBiriyani.jpeg");
var frechfries_jpeg_1 = require("../public/frechfries.jpeg");
var pizza_jpeg_1 = require("../public/pizza.jpeg");
var pancakes_webp_1 = require("../public/pancakes.webp");
var roll_jpeg_1 = require("../public/roll.jpeg");
var tan_jpeg_1 = require("../public/tan.jpeg");
var idle_jpeg_1 = require("../public/idle.jpeg");
var rice_jpeg_1 = require("../public/rice.jpeg");
var ramen_jpeg_1 = require("../public/ramen.jpeg");
function Food() {
    var data = [
        {
            img: burger_jpeg_1["default"],
            rating: 4.3,
            cost: 80,
            name: "burger"
        },
        {
            img: dumBiriyani_jpeg_1["default"],
            rating: 4.5,
            cost: 250,
            name: "Dum Biryani"
        },
        {
            img: frechfries_jpeg_1["default"],
            rating: 4.8,
            cost: 30,
            name: "French Fries"
        },
        {
            img: pizza_jpeg_1["default"],
            rating: 3.8,
            cost: 300,
            name: "Pizza + Cheese"
        },
        {
            img: pancakes_webp_1["default"],
            rating: 3.9,
            cost: 150,
            name: "Pancake"
        },
        {
            img: roll_jpeg_1["default"],
            rating: 4.6,
            cost: 300,
            name: "veg roll"
        },
        {
            img: tan_jpeg_1["default"],
            rating: 4.9,
            cost: 300,
            name: "Tandoori"
        },
        {
            img: idle_jpeg_1["default"],
            rating: 2.4,
            name: "Sambar Idly",
            cost: 30
        },
        {
            img: rice_jpeg_1["default"],
            rating: 3.7,
            cost: 70,
            name: "Sambar Rice"
        },
        {
            img: ramen_jpeg_1["default"],
            rating: 2.9,
            cost: 500,
            name: "Ramen"
        },
    ];
    return (react_1["default"].createElement("div", { className: "w-full min-h-screen bg-[#f0f4ff] py-[35px]" },
        react_1["default"].createElement("div", { className: "base-wrapper" },
            react_1["default"].createElement("div", { className: "robot py-3 w-full md:w-[50%] text-center md:text-left transition-all duration-300 cursor-pointer text-[#291D89] hover:text-[#4e67eb] font-bold text-[48px]" }, "Foods"),
            react_1["default"].createElement("div", { className: "grid grid-cols-4 gap-[20px]" }, data.map(function (e, i) { return (react_1["default"].createElement(FoodCard_1["default"], { key: i, image: e.img, name: e.name, price: e.cost, rating: e.rating })); })))));
}
exports["default"] = Food;
